import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '@components/EverySectionHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientProfileComponents/ClientOrders.css'
import NewTasksComponent from './NewTasksComponent';
// import AssignedOrders from './AssignedOrders';
// import PlacedOrders from './PlacedOrders';
const ExpertNewTasks = () => {
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
                            New Task
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
                        <NewTasksComponent />
                    </TabPane>
                    <TabPane tabId='2'>
                        {/* <AssignedOrders /> */}
                    </TabPane>
                    <TabPane tabId='3'>
                        {/* <PlacedOrders /> */}
                    </TabPane>
                </TabContent>
                
        </div>
   
     
</React.Fragment>
  )
}

export default ExpertNewTasks