import React from 'react';
import Avatar from 'react-avatar';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOrders.css'
import useJwt from '../../../Util';
import {Link} from 'react-router-dom';
/// Redux
import { connect } from 'react-redux';
import ContentLoader from '../../../ContentLoader'
const PlacedOrders = (props) => {
  const [tableData, setTableData] = React.useState(null)

  React.useEffect(()=>{
    let token = props.sessionToken;
    useJwt.post('clients/get_client_tasks',{status:0,token:token}).then((res)=>{
        setTableData(res.data.records);
    })
  },[])
  if(tableData){
    return (

        <React.Fragment>
           <div className="cp__section" style={{display: 'block',background:'#eee'}}>
                <h5 style={{paddingLeft:'0',marginTop:'40px'}}>Placed Orders
                    <div style={{float: 'right'}}>
                        
                    </div>
                </h5>
            </div>
            <div className="cp__section" style={{padding: '10px'}}>
                <Table  hover className="order__table">
                    <thead>
                        <tr>
                            <th style={{width:'25%'}}>ORDER NUMBER</th>
                            <th>SUBJECT</th>
                            <th style={{width:'50px'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(tableData).length > 0 ?
                            Object.values(tableData).map((row)=>{
                                return (
                                    <tr>
                                        <td style={{verticalAlign:'middle'}}>{row.id}</td>
                                        <td>
                                            <Avatar
                                            color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])}
                                            name="Finance" round={true} size={32}  textSizeRatio={2}
                                            />
                                            <span className='align-middle font-weight-bold pl-2'>{row.skill_name}</span>
                                        </td>
                                        <td>
                                            <button style={{fontSize: '12px'}} className="btn-theme-default">
                                                <Link to={{
                                                    pathname:"/proposals/"+row.id,
                                                    data:{task_id:row.id}
                                                }}>Proposals</Link>
                                            </button>
                                        </td>
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
      // dispatching plain actions
      // login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData, sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(PlacedOrders)
