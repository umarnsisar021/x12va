import React, { useState } from 'react'
import ProjectTab from './ProjectTab'
import HireExpertTab from './HireExpertTab'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

// styling of this component is contained in ProjectTab.css file
import './ProjectTab.css'

function TabsComp() {

    const [active, setActive] = useState('1')
    const toggle = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <React.Fragment>
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
                    <ProjectTab/>
                </TabPane>
                <TabPane tabId='2'>
                    <HireExpertTab/>
                </TabPane>
            </TabContent>
        </React.Fragment>
    )
}

export default TabsComp
