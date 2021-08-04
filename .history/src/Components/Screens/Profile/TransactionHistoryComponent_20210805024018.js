import React from 'react'
import Table from 'react-bootstrap/Table'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt, { useQueryLocation } from '@utils'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GlobalLoader from '../../GlobalLoader'
import Avatar from 'react-avatar'
function TransactionHistoryComponent(props) {

    let query = useQueryLocation();
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [data, setdata] = React.useState(null)
    React.useEffect(()=>{
        useJwt.post('transaction/get_transaction_history', {page: currentPage, perPage: rowsPerPage, token: props.sessionToken,status:1 }).then((res)=>{
            //console.log(res.data.records)
            setdata(res.data.records.data)
           
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
        useJwt.post('transaction/get_transaction_history', {
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
            name: 'DATE',
            minWidth: '160px',
            selector: 'Name',
            sortable: true,
            cell: row => row.created_at
        },
        {
        name: 'DESCRIPTION',
        minWidth: '160px',
        selector: 'Name',
        sortable: true,
        cell: row => (<div style={{alignItems: 'center'}}>
               
                <span className='align-middle font-weight-bold pl-2'>{row.description}</span>
            </div>)
    },
    {
        name: 'AMOUNT',
        minWidth: '40%',
        selector: 'Name',
        sortable: true,
        cell: row => (
            <div className={"px-3"} style={{textAlign:'right',width:'100%'}}>
                 {row.debit > 0 ? <span style={{color:'green'}}>{row.debit}</span> : <span style={{color:'red'}}>-{row.credit}</span>}
            </div>
        )
    },

]
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
                <div className="pb-3">
                    <h5>Transaction History</h5>
                </div>
                <div className="" style={{ padding: '0px', background: '#f6f7fa' }}>
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
                    />
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
    }
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData: auth.userData ,sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(TransactionHistoryComponent)
