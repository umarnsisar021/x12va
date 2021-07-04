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

const CompletedOrders = () => {
  const [active, setActive] = React.useState('1')
  const [tableData, setTableData] = React.useState(null)

  React.useEffect(()=>{
    useJwt.post('').then((res)=>{
        setTableData(res.data.records);
    })
  })
  if(tableData){
    return (
    
        <React.Fragment>
            <h5 style={{paddingLeft:'130px',marginTop:'40px'}}>Completed Orders</h5>
            <div className="cp__section" style={{padding: '10px'}}>
                <Table  hover className="order__table">
                    <thead>
                        <tr>
                        <th>ORDER NUMBER</th>
                        <th>SUBJECT</th>
                        <th>DELIVERY DATE</th>
                        <th>BUDGET</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7834</td>
                            <td>
                                <Avatar 
                                color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])} 
                                name="Finance" round={true} size={32}  textSizeRatio={2}
                                />
                                <span className='align-middle font-weight-bold pl-2'>Finance</span>
                            </td>
                            <td className="mt-5">$567.00</td>
                            <td>Mar 23, 2021</td>
                            <td>Mar 30, 2021</td>
                            <td>
                                <Badge pill variant="success" color="success" >
                                Completed
                                </Badge>
                            </td>
                        </tr>
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

export default CompletedOrders