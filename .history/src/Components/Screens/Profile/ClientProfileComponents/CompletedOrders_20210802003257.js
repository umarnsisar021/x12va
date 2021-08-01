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
  props.showFadeLoader()
  React.useEffect(()=>{
    let token = props.sessionToken;
    useJwt.post('clients/get_client_tasks',{status:3,token:token}).then((res)=>{
        setTableData(res.data.records);
    })
  },[])
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
