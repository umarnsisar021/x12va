import React from 'react'
import './WorkLowerBanner.css'
import useJwt from '@utils'
import { connect } from 'react-redux'
import Login from '@screens/Login/Login'


function WorkLowerBanner(props) {
    const [modalShow, setModalShow] = useState(false);
    const handlSubmitRequestWithRef = ()=>{
        if(Object.keys(props.userData).length > 0) {
            alert('0')
        } else{
           
        }       
    }
    return (
        <div className="work__lowerBanner">
            <div className="lowerBanner__inner">
                <h1>What is test your skills method.</h1>
                <p>
                    Through Test your skills method, anybody 
                    can join our network and work for us. 
                    It is a rigorious, concrete and carefully 
                    observed screening process through which 
                    you can be part of our network. To join 
                    through this method, you’ll need to follow 
                    these steps
                </p>
                <div className="bullets">
                    <div><span>1</span>Scan both sides of your id card</div>
                    <div><span>2</span>Scan transcripts for your qualifications</div>
                    <div><span>3</span>Answer few questions and submit your application</div>
                </div>

                <p className="second__para">
                    Next step is to relax. We will carefully 
                    review documents you submitted. If you are 
                    what we are looking for, we will get 
                    back to you.
                </p>
                <p>
                    Next step will be a test for the skills 
                    that you have applied and submitted document 
                    for. Well, if you pass the test, then you’ll 
                    be able to make profile on our network.
                </p>
                <button onClick={()=>{handlSubmitRequestWithRef()}}>Proceed to skills test method</button>
            </div>
            <Login  show={modalShow}
            onHide={()=> setModalShow(false)}/>
        </div>

    )
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
  }

export default connect(mapStateToProps) (WorkLowerBanner)
