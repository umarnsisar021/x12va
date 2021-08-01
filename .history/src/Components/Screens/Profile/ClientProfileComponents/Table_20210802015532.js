import Avatar from 'react-avatar';
import react from '../../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import useJwt from '../../../Util';
import formatDate from '@utils';
import { connect } from 'react-redux';


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

const TableBorderless = (props) => {
  const [data,setData] = useState(null);
  useEffect(()=>{
    useJwt.post('clients/get_client_tasks', {token:props.sessionToken,status:1}).then((res)=>{
      console.log(res.data.records) 
      setData(res.data.records)
    })
  },[])
  console.log(formatDate('2021-07-27',null,'-'))
  if(data){
    return (
      <Table  hover className="order__table">
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
          {Object.values(data).map((row)=>{
            return (
              <tr>
                <td>#{row.id}</td>
                <td>
                  <Avatar 
                    color={Avatar.getRandomColor('sitebase', ['#21BCDD', '#00A080', '#E7C621', '#8F43FB'])} 
                    name={row.skill_name} round={true} size={32}  textSizeRatio={2}
                  />
                  <span className='align-middle font-weight-bold pl-2'>{row.skill_name}</span>
                </td>
                <td className="mt-5">${row.budget}</td>
                <td>{row.budget}</td>
                <td>Mar 30, 2021</td>
                <td>
                  <Badge pill variant="success" color="success" >
                    Completed
                  </Badge>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }else{
    return false
  }
  
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
    hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
  }
}
function mapStateToProps(state) {
  const { auth,skills } = state
  return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
}
export default connect(mapStateToProps,mapDispatchToProps)(TableBorderless)
