import React from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import EverySectionHeader from '../../../EverySectionHeader'
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    title="Client Profile"
                    // childComponent={myComponent}
                />
                <div className="cp__section">
                    {/* <ClientProfileSidebar data={userData} />
                    <ClientProfileDetails/> */}
                </div>
        </div>
    <Nav tabs className="tabs__nav">
        <NavItem>
            <NavLink
                className="tabs__link"
                active={active === '1'}
                onClick={() => {
                    toggle('1')
                }}
            >
                Projects
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
                Hire Expert
            </NavLink>
        </NavItem>
    </Nav>
    <TabContent className='py-50' activeTab={active}>
        <TabPane tabId='1'>
              
        </TabPane>
        <TabPane tabId='2'>

        </TabPane>
    </TabContent>
</React.Fragment>
  )
}

export default ClientOrders