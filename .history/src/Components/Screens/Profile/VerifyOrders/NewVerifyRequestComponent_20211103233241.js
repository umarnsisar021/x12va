import React from 'react'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt from '@utils'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GlobalLoader from '@components/GlobalLoader'
import Avatar from 'react-avatar'
import default_profile from '@images/default-profile.png';
function NewVerifyRequestComponent(props) {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [data, setdata] = React.useState([])
    props.showFadeLoader();
    setTimeout(()=>{
        props.hideFadeLoader();
    },3000)
    React.useEffect(()=>{
        props.showFadeLoader();
        useJwt.post('experts/get_verify_requests', {page: currentPage, perPage: rowsPerPage, token: props.sessionToken }).then((res)=>{
            setdata(res.data.records)
            props.hideFadeLoader();
        })
    },[])

    const customStyles = {
        rows: {
            style: {
              minHeight: '720px', // override the row height
            }
          },
          headCells: {
          style: {
            paddingLeft: '80px', // override the cell padding for head cells
            paddingRight: '80px',
          },
        },
      
      };

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
                    customStyles={customStyles}
                    containerClassName={'pagination react-paginate float-right justify-content-end my-2 pr-1'}
                />
            </div>

        )
    }
    // ** Function in get data on page change
    const handlePagination = page => {
        useJwt.post('experts/get_expert_new_tasks', {
            page: page.selected + 1,
            perPage: rowsPerPage,
            token: props.sessionToken
        }).then((res) => {
            setdata(res.data.records)
        })
        setCurrentPage(page.selected + 1)
    }
    // ** Colums
    const columns = [
        {
            name: 'ORDER NUMBER',
            minWidth: '5%',
            selector: 'Name',
            sortable: true,
            style:{
                justifyContent:'center'
            },
            cell: row => <div style={{justifyContent:'center',height:'100%'}}>
                    <div>#{row.id}</div>
                </div>
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
            name: 'EARN',
            minWidth: '',
            selector: 'Name',
            sortable: true,
            cell: row => (
                <div className="d-flex font-weight-bold" style={{alignItems: 'baseline',height: '100%'}}>
                    $&nbsp;<span className="f-16">{row.verifier_amount}</span>
                </div>)
        },
        {
                name: '',
                minWidth: '100px',
                selector: 'Name',
                sortable: true,
                cell: row => (<div className="pl-2" style={{justifyContent: 'end'}}>
                    <Link to={{ pathname: '/experts/order/view', data: row}}params={{ query: "" }}>
                        <button className="btn-theme-light btn-sm">
                            Accept
                        </button>
                    </Link>
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
            </div> 
        
       
    };
    // ** Table data to render
    const dataToRender = () => {
        let filters =[];
        const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
        })

        if (data.length > 0) {
            return data
        } else if (data.length === 0 && isFiltered) {
        return []
        } else {
            return data.slice(0, rowsPerPage)
        }
    }

    if(data){
        return (
            <React.Fragment>
                
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '0px', background: '#f6f7fa' }}>
                        <div className="py-2">
                            <h5 className="">Order Verify Requests</h5>
                        </div>
                        <div>
                            <DataTable
                                noHeader
                                pagination
                                responsive
                                paginationServer
                                expandableRows
                                expandableRowsComponent={ExpandedComponent}
                                columns={columns}
                                sortIcon={<ChevronDown />}
                                className='react-dataTable'
                                paginationComponent={CustomPagination}
                                data={dataToRender()}
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
export default connect(mapStateToProps,mapDispatchToProps)(NewVerifyRequestComponent)
