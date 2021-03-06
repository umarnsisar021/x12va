import React from 'react'
import './Proposals.css'
import Table from 'react-bootstrap/Table'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt, { useQueryLocation } from '@utils'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import GlobalLoader from '../../GlobalLoader'
function Proposals(props) {

    let query = useQueryLocation();
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [data, setdata] = React.useState(null)
    const {task_id} =useParams();
    React.useEffect(()=>{
        useJwt.post('clients/get_client_proposals', {page: currentPage, perPage: rowsPerPage, token: props.sessionToken ,task_id:task_id}).then((res)=>{
            setdata(res.data.records)
        })
    },[1])

    // ** Custom Pagination
    const CustomPagination = (d) => {
        console.log(d)
        const count = Number(Math.ceil(data.total / rowsPerPage))
        const row_start = (currentPage * rowsPerPage) - (rowsPerPage) + 1;
        const row_end = ((currentPage * rowsPerPage) - rowsPerPage) + data.data.length;
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
        useJwt.post('clients/get_client_proposals', {
            page: page.selected + 1,
            perPage: rowsPerPage,
            token: props.sessionToken
        }).then((res) => {
            setdata(res.data.records)
        })
       
        setCurrentPage(page.selected + 1)
    }
    // ** Colums
    const columns = [{
        name: 'DESCRIPTION',
        minWidth: '45%',
        selector: 'Name',
        sortable: true,
        cell: row => row.description.split('\n')[0]

    },
    {
        name: 'DAYS',
        minWidth: '',
        selector: 'Name',
        sortable: true,
        cell: row => (<> {`${row.days} days`}</>)
    },
        {
            name: 'BUDGET',
            minWidth: '100px',
            selector: 'Name',
            sortable: true,
            cell: row => (<> {`$${row.budget}`}</>)
        },
        {
            name: '',
            minWidth: '200px',
            selector: 'Name',
            sortable: true,
            cell: row => (<>
                 <Link className="btn-theme-light" to={{ pathname: '/proposal/view/'+row.id, data: row}}>
                        View Proposal
                </Link>
            </>)
        },

]
    // ** Table data to render
    const dataToRender = () => {
        const filters = {
            // role: currentRole.value,
            // currentPlan: currentPlan.value,
            // status: currentStatus.value,
            // q: searchTerm
        }

        const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
        })

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
            <div style={{display:'grid'}}>
                <EverySectionHeader
                    title="Proposals"
                />
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '0px', background: '#f6f7fa' }}>
                        <div>
                            <DataTable
                                noHeader
                                pagination

                                responsive
                                paginationServer
                                columns={columns}
                                sortIcon={<ChevronDown />}
                                className='react-dataTable'
                                paginationComponent={CustomPagination}
                                data={dataToRender()}
                            // subHeaderComponent={
                            //     <CustomHeader
                            //         toggleSidebar={toggleSidebar}
                            //         handlePerPage={handlePerPage}
                            //         rowsPerPage={rowsPerPage}
                            //         searchTerm={searchTerm}
                            //         handleFilter={handleFilter}
                            //     />
                            // }
                            />
                        </div>

                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Proposals)
