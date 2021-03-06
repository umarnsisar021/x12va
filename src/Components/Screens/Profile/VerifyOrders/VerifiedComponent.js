import React from 'react'

/// Data Table
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt from '@utils'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import GlobalLoader from '@components/GlobalLoader'
import Avatar from 'react-avatar'
import default_profile from '@images/default-profile.png';

const get_color =(num)=>{
    if (num < 3) {
        return '#ff0000'
    }
    if (num < 7) {
        return '#ffa500'
    }
    if(num > 7){
        return '#026e1b'
    }
}
function VerifiedComponent(props) {
    let history = useHistory();
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [data, setdata] = React.useState(null)
    props.showFadeLoader();
    React.useEffect(()=>{
        useJwt.post('experts/get_verify_completed', {page: currentPage, perPage: rowsPerPage, token: props.sessionToken    }).then((res)=>{
            setdata(res.data.records)
            props.hideFadeLoader();
        })
    },[1])

    // ** Custom Pagination
    const CustomPagination = (d) => {
        const count = Number(Math.ceil(data.total / rowsPerPage))
        const row_start = (currentPage * rowsPerPage) - (rowsPerPage) + 1;
        const row_end = ((currentPage * rowsPerPage) - rowsPerPage) + data.length;
        return (
            <div >
                <span style={{ marginTop: '14px', fontSize: '14px', display: 'inline-block', color: '#A3A3A3' }}>Showing {row_start} - {row_end} of {data.total}</span>
                <ReactPaginate
                    pageCount={3}
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={count || 1}
                    activeClassName='active'
                    forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                    onPageChange={page => handlePagination(page)}
                    pageClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    nextClassName={'page-item next'}
                    previousClassName={'page-item prev'}
                    previousLinkClassName={'page-link'}
                    pageLinkClassName={'page-link'}
                    containerClassName={'pagination react-paginate float-right justify-content-end my-2 pr-1'}
                />
            </div>

        )
    }
    // ** Function in get data on page change
    const handlePagination = page => {
        useJwt.post('experts/get_verify_ongoing', {
            page: page.selected + 1,
            perPage: rowsPerPage,
            token: props.sessionToken
        }).then((res) => {
            setdata(res.data.records)
        })
        setCurrentPage(page.selected + 1)
    }
    const columns = [
        {
            name: 'ORDER NUMBER',
            minWidth: '5%',
            selector: 'Name',
            sortable: true,
            style:{
                '-webkit-align-items':'center !important'
            },
            cell: row => <div className="font-weight-bold">#{row.id}</div>
        },
        {
            name: 'EXPERT',
            minWidth: '',
            selector: 'Name',
            sortable: true,
            cell: row => (
                <div className="d-flex" style={{alignItems: 'center'}}>
                    <Avatar src={row.expert_avatar ? row.expert_avatar : default_profile} round={true} size={32}  textSizeRatio={2}
                    />
                    <span className='align-middle pl-2'>{row.expert_first_name} {row.expert_last_name}</span>
                </div>)
        },
        {
            name: 'CLIENT',
            minWidth: '',
            selector: 'Name',
            sortable: true,
            cell: row => (
                <div className="d-flex" style={{alignItems: 'center'}}>
                    <Avatar src={row.client_avatar ? row.client_avatar : default_profile} round={true} size={32}  textSizeRatio={2}
                    />
                    <span className='align-middle pl-2'>{row.client_first_name} {row.client_last_name}</span>
                </div>)
        },
        {
            name: 'EARNED',
            minWidth: '',
            selector: 'Name',
            sortable: true,
            cell: row => (
                <div className="d-flex" style={{alignItems: 'baseline',height: '100%'}}>
                    $&nbsp;<span className="f-16">{row.verifier_amount}</span>
                </div>)
        },
]

    const ExpandedComponent = ({ data }) => {
        return <div className="px-5 py-4 f-14">
                <div className="col-md-12">
                    <span><strong>Subject : </strong>{data.skill_name}</span>
                </div>
                <div className="col-md-12 py-2">
                    <strong>Description :</strong>
                    <p>{data.description}</p>
                </div>

                <div className="col-md-12 py-2 text-center mt-3">
                
                        {/* <Rating onClick={handleRating}  ratingValue={rating} stars={5} /> */}

                        <div>
                            <h3>You Rated</h3>
                            <div  className="d-flex align-items-center justify-content-center mt-0 mb-0" style={{fontSize:'40px'}} >
                                <div className="">
                                    <span style={{color:get_color(data.verifier_rating)}}>{data.verifier_rating}</span> / 10
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <strong>Remarks</strong>: {data.verifier_note} 
                        </div>
            
                </div>
            </div> 
        
    
    };
    // ** Table data to render
    const dataToRender = () => {
        let filters =[];
        const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
        })
        console.log(data.length)
        if (data.length > 0) {
            return data
        } else if (data.length === 0 && isFiltered) {
            return []
        } else {
            return data.data.slice(0, rowsPerPage)
        }
    }

    if(data){
        return (
            <React.Fragment>
                
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '0px', background: '#f6f7fa' }}>
                        <div className="py-2">
                            <h5 className="">Ongoing Orders</h5>
                        </div>
                        <div>
                            <DataTable
                                noHeader
                                pagination
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                responsive
                                paginationServer
                                columns={columns}
                                sortIcon={<ChevronDown />}
                                className='react-dataTable'
                                paginationComponent={CustomPagination}
                                data={dataToRender()}
                                onRowClicked={(row)=>{
                                    history.push('/experts/order/verify/'+row.id)
                                }}
                            />
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
    else{
    return <GlobalLoader/>
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        login: (data) => dispatch({ type: 'LOGIN', payload: data }),
        showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
        hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData: auth.userData ,sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(VerifiedComponent)
