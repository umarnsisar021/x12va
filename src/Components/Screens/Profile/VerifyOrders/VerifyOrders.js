import React, { useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '@components/EverySectionHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../ClientProfileComponents/ClientOrders.css'
import VerifiedComponent from './VerifiedComponent';
import NewVerifyRequestComponent from './NewVerifyRequestComponent';
import OnGoingVerifyOrderComponent from './OnGoingVerifyOrderComponent';

import { useHistory, useParams } from 'react-router-dom';
// import AssignedOrders from './AssignedOrders';
// import PlacedOrders from './PlacedOrders';
const VerifyOrders = () => {
  let history = useHistory(); 
  const {type} = useParams();
  const [active, setActive] = React.useState('1')
  const toggle = tab => {
      if(tab == 1){
        history.push('/experts/verify/orders')
      }
      else if(tab == 0){
        history.push('/experts/verify/orders/completed')
      }
      else if(tab == 2){
        history.push('/experts/verify/orders/new')
      }
      else if(tab == 3){
        history.push('/experts/verify/orders/sentproposals')
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
                    title="Verify Orders"
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
                           Ongoing 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="tabs__link"
                            active={active === '0'}
                            onClick={() => {
                                toggle('0')
                            }}
                        >
                           Completed
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
                             New Requests
                        </NavLink>
                    </NavItem>
                </Nav>
                
                  
                  <TabContent className='py-50' activeTab={active}>
                    <TabPane tabId='0'>
                        <VerifiedComponent />
                    </TabPane>
                    <TabPane tabId='1'>
                        <OnGoingVerifyOrderComponent />
                    </TabPane>
                    <TabPane tabId='2'>
                        <NewVerifyRequestComponent />
                    </TabPane>
                </TabContent>
                
        </div>
   
     
</React.Fragment>
  )
}

export default VerifyOrders