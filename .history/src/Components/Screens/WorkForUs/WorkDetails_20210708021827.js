import React from 'react'
import './WorkDetails.css'

import avatar1 from '../../../Assets/Images/WorkForUS screen 1.png'
import avatar2 from '../../../Assets/Images/WorkForUS screen 2.png'
import { connect } from 'react-redux'
import Login from '@screens/Login/Login'
import { useHistory } from 'react-router-dom'

function WorkDetails(props) {
    const history =  useHistory()
    const [modalShow, setModalShow] = React.useState(false);
    const handlSubmitRequestWithRef = ()=>{
        if(Object.keys(props.userData).length > 0) {
            history.push('/usereferencecode')
        } else{
            setModalShow(true)
        }       
    }
    return (
        <div className="workDetails__wrapper">
            <div className="workFurther__details">
                <p>
                    <span className="colored__head">Hi, </span>
                    its very delightful to see when someone 
                    wants to work with us and grow our 
                    community. Believe us, we are even more
                    excited than you about working together. 
                    There are two ways you can join our 
                    network. One is reference code and other 
                    is test your skills method.
                </p>
                <h4>What is reference code.</h4>
                <p>
                    We have issued codes to our some verified 
                    and tested and tried experts. We believe 
                    them and the people whom they vouch for. 
                    If you are one who has got reference code 
                    from one of our verified experts, you can 
                    enter the code and make the profile.
                </p>
                <button>use refrence code</button>
            </div>
            <div className="workImage__sec">
                <img src={avatar1} 
                    className="avatarScreenImage1"
                />
                <img src={avatar2} 
                    className="avatarScreenImage2"
                />
            </div>
            <Login show={modalShow}
            onHide={()=> setModalShow(false)}/>         
        </div>
    )
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
  }

export default connect(mapStateToProps)(WorkDetails)
