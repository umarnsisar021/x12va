import React, { useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '@components/EverySectionHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientProfileComponents/ClientOrders.css'
import NewTasksComponent from './NewTasksComponent';
import { useHistory, useParams } from 'react-router-dom';
// import AssignedOrders from './AssignedOrders';
// import PlacedOrders from './PlacedOrders';
const ExpertNewTasks = () => {
  let history = useHistory(); 
  const {type} = useParams();
  const [active, setActive] = React.useState('1')
  const toggle = tab => {
      if(tab == 1){
        history.push('/experts/orders')
      }
      else if(tab == 2){
        history.push('/experts/orders/new')
      }
      else if(tab == 3){
        history.push('/experts/orders/new')
      }
      if (active !== tab) {
          setActive(tab)
      }
  }
  useEffect(()=>{
    if(type == 'new'){
        toggle('2')
      }
      else if(type == 'sentproposals'){
        toggle('3')
      }    
  },[])

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
                           Ongoing Orders
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
                             New Orders
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
                           Sent Proposals
                        </NavLink>
                    </NavItem>
                </Nav>
                
                  
                  <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='1'>
                        <NewTasksComponent />
                    </TabPane>
                    <TabPane tabId='2'>
                        <NewTasksComponent />
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