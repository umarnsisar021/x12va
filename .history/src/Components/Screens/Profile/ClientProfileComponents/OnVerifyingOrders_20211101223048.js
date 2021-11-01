import React from 'react';
import Avatar from 'react-avatar';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOrders.css'
import {Link} from 'react-router-dom';
import useJwt, { useQueryLocation } from '@utils';
/// Redux
import { connect } from 'react-redux';
import ContentLoader from '../../../ContentLoader'
import { useHistory } from 'react-router';
import ReactPaginate from 'react-paginate';
import DataTable from 'react-data-table-component';
import { ChevronDown } from 'react-feather';
import GlobalLoader from '../../../GlobalLoader';
const PlacedOrders = (props) => {
  const [tableData, setTableData] = React.useState(null)
  let history = useHistory();
  let query = useQueryLocation();
  const [currentPage, setCurrentPage] = React.useState(1)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [data, setdata] = React.useState([])
  React.useEffect(()=>{
    let token = props.sessionToken;
    useJwt.post('clients/get_client_tasks',{status:3,token:token}).then((res)=>{
        setdata(res.data.records.data);
    })
  },[])


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
            selector: 'Name',   
            sortable: true,
            cell: row => `#${row.id}`
        },
        {
        name: 'SUBJECT',
        minWidth: '20%',
        selector: 'Name',
        sortable: true,
        cell: row => (<div className="d-flex" style={{alignItems: 'center'}}>
                <Avatar
                color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                name={row.skill_name} round={true} size={32}  textSizeRatio={2}
                />
                <span className='align-middle pl-2'>{row.skill_name}</span>
            </div>)
    },
    {
        name: '',
        minWidth: '',
        selector: '',
        sortable: true,
        cell: row => (
            <div className="text-right px-3" style={{width:'100%'}}>
                <button style={{fontSize: '12px'}} className="btn-theme-default">
                    <Link to={{
                        pathname:"/proposals/"+row.id,
                        data:{task_id:row.id}
                    }}>View details</Link>
                </button>
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
              
            <div className="wrapper__box">
                <div className="wrapper__innerBox" style={{ padding: '0px', background: '#f6f7fa' }}>
                    <div className="py-2">
                        <h5 className="">On Verifying Orders</h5>
                    </div>
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
                            // onRowClicked={(row)=>{
                            //     history.push('/order/view/history/'+row.id)
                            // }}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>

      )
  }
  else{
      return <ContentLoader />
  }

}


const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      // login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData, sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlacedOrders)
