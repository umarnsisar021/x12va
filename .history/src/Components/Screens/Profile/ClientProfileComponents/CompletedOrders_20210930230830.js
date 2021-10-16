import React from 'react';
import Avatar from 'react-avatar';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOrders.css'
import useJwt from '../../../Util';
/// Redux 
import { connect } from 'react-redux';
import { Globe } from 'react-feather';
import ContentLoader from '../../../ContentLoader';

const CompletedOrders = (props) => {
  const [tableData, setTableData] = React.useState(null)
  props.showFadeLoader();
  React.useEffect(()=>{
    let token = props.sessionToken;
    useJwt.post('clients/get_client_tasks',{status:4,token:token}).then((res)=>{
        setTableData(res.data.records);

        props.hideFadeLoader();
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
    name: 'DESCRIPTION',
    minWidth: '40%',
    selector: 'Name',
    sortable: true,
    cell: row => row.task_description
},
{
    name: 'DAYS',
    minWidth: '',
    selector: 'Name',
    sortable: true,
    cell: row => (<> {`${row.days} days`}</>)
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

  if(tableData){
    return (
    
        <React.Fragment>
            <h5 style={{paddingLeft:'130px',marginTop:'40px'}}>Completed Orders</h5>
            <div className="cp__section" style={{padding: '10px'}}>
                <Table  hover className="order__table">
                    <thead>
                        <tr>
                            <th style={{width:'25%'}}>ORDER NUMBER</th>
                            <th style={{width:'25%'}}>SUBJECT</th>
                            <th style={{width:'25%'}}>DELIVERY DATE</th>
                            <th>BUDGET</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(tableData).length > 0 ?
                            Object.values(tableData).map((row)=>{
                                return (
                                    <tr>
                                        <td style={{verticalAlign:'middle'}}>{row.id}</td>
                                        <td style={{verticalAlign:'middle'}}>
                                            <Avatar 
                                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])} 
                                            name="Finance" round={true} size={32}  textSizeRatio={2}
                                            />
                                            <span className='align-middle font-weight-bold pl-2'>{row.skill_name}</span>
                                        </td>
                                        <td style={{verticalAlign:'middle'}}>{row.complete_date}</td>
                                        <td style={{verticalAlign:'middle'}}>{row.budget}</td>
                                    </tr>
                                )
                            })
                            :
                            <tr>
                                <td className="p-4" style={{verticalAlign:'middle',textAlign:'center'}} colSpan={5}>
                                    There are no completed orders
                                </td>
                            </tr>
                        }
                    </tbody>
                </Table>
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
        showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true', text: text }),
        hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false, text:''}),
      // dispatching plain actions
      // login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData, sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(CompletedOrders)
