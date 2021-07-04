import React from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '../../../EverySectionHeader'
import Avatar from 'react-avatar';
import react from '../../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOrders.css'

const ClientOrders = () => {
  const [active, setActive] = React.useState('1')
  const toggle = tab => {
      if (active !== tab) {
          setActive(tab)
      }
  }
  return (
    
    <React.Fragment>
       <div className="cpMain__wrapper">
                <EverySectionHeader
                    title="My Orders"
                    // childComponent={myComponent}
                />
                <Nav tabs className="tabs__nav" style={{margin:'0px'}}>
                    <NavItem>
                        <NavLink
                            className="tabs__link"
                            active={active === '1'}
                            onClick={() => {
                                toggle('1')
                            }}
                        >
                            Completed Orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="tabs__link"
                            active={active === '2'}
                            onClick={() => {
                                toggle('2')
                            }}
                        >
                            Assigned Orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="tabs__link"
                            active={active === '3'}
                            onClick={() => {
                                toggle('3')
                            }}
                        >
                           Placed Orders
                        </NavLink>
                    </NavItem>
                </Nav>
                
                  
                  <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
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
                    </TabPane>
                    <TabPane tabId='2'>

                    </TabPane>
                    <TabPane tabId='3'>

                    </TabPane>
                </TabContent>
                
        </div>
   
     
</React.Fragment>
  )
}

export default ClientOrders