import Avatar from 'react-avatar';
import react from '../../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'

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

const TableBorderless = () => {
  return (
    <Table  striped hover className="order__table">
      <thead>
        <tr>
          <th>ORDER NUMBER</th>
          <th>SUBJECT</th>
          <th>BUDGET</th>
          <th>START DATE</th>
          <th>END DATE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>7834</td>
          <td>
            <Avatar 
              color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])} 
              name="Finance" round={true} size={32} 
            />
            <span className='align-middle font-weight-bold'>Finance</span>
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
        <tr>
          <td>7834</td>
          <td>
            <Avatar 
              color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])} 
              name="Finance" round={true} size={32} 
            />
            <span className='align-middle font-weight-bold'>Finance</span>
          </td>
          <td>$567.00</td>
          <td>Mar 23, 2021</td>
          <td>Mar 30, 2021</td>
          <td>
            <Badge pill variant="success" color="success" >
              Completed
            </Badge>
          </td>
        </tr>
        <tr>
          <td>7834</td>
          <td>
            <Avatar 
              color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#8F43FB', '#E7C621'])} 
              name="Finance" round={true} size={32} 
            />
            <span className='align-middle font-weight-bold'>Finance</span>
          </td>
          <td>$567.00</td>
          <td>Mar 23, 2021</td>
          <td>Mar 30, 2021</td>
          <td>
            <Badge pill variant="success" color="success" >
              Completed
            </Badge>
          </td>
        </tr>
        <tr>
          <td>7834</td>
          <td>
            <Avatar 
              color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#E7C621', '#8F43FB', '#00A080'])} 
              name="Finance" round={true} size={32} 
            />
            <span className='align-middle font-weight-bold'>Finance</span>
          </td>
          <td>$567.00</td>
          <td>Mar 23, 2021</td>
          <td>Mar 30, 2021</td>
          <td>
            <Badge pill variant="success" color="success" >
              Completed
            </Badge>
          </td>
        </tr>
        <tr>
          <td>7834</td>
          <td>
            <Avatar 
              color={Avatar.getRandomColor('sitebase', ['#00A080', '#E7C621', '#8F43FB', '#21BCDD'])} 
              name="Finance" round={true} size={32} 
            />
            <span className='align-middle font-weight-bold'>Finance</span>
          </td>
          <td>$567.00</td>
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
  )
}

export default TableBorderless