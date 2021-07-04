import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '../../../EverySectionHeader'
import Avatar from 'react-avatar';
import react from '../../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOrders.css'
import useJwt from '../../../Util';
/// Redux 
import { connect } from 'react-redux';

const AssignedOrders = (props) => {
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
            <h5 style={{paddingLeft:'130px',marginTop:'40px'}}>Assigned Orders</h5>
            <div className="cp__section" style={{padding: '10px'}}>
                <Table  hover className="order__table">
                    <thead>
                        <tr>
                            <th style={{width:'25%'}}>ORDER NUMBER</th>
                            <th style={{width:'25%'}}>ORDER NUMBER</th>
                            <th style={{width:'25%'}}>START DATE</th>
                            <th style={{width:'25%'}}>START DATE</th>
                            <th>BUDGET</th>
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
                                    </tr>
                                )
                            })
                            
                            : ""
                        }
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
     
      )
  }
  else{
      return false
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
export default connect(mapStateToProps,mapDispatchToProps)(AssignedOrders)
