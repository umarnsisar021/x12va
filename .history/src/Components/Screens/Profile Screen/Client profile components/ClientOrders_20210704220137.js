import Avatar from 'react-avatar';
import react from '../../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
const avatarGroupData1 = [
  {
    title: 'Sarah',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData2 = [
  {
    title: 'Vanna',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData3 = [
  {
    title: 'Justina',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const avatarGroupData4 = [
  {
    title: 'Jenette',
    img: react,
    imgHeight: 26,
    imgWidth: 26
  }
]

const ClientOrders = () => {
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

export default TableBorderless