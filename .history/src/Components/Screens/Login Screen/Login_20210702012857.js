import React, { useEffect } from 'react'
import './Login.css'
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import icon2 from '../../../Assets/Icons/iconfinder_1_Facebook2_colored_svg_5296500.png'
import icon1 from '../../../Assets/Icons/iconfinder_Google_1298745.png'
import icon3 from '../../../Assets/Icons/iconfinder_Social-media_Twitter_4362955.png'

import { toast } from 'react-toastify';
import useJwt from '../../Util';
import { connect } from 'react-redux'

/// Social login
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


function Login( props ) {
    /// Google Response
    useEffect(()=>{
       // console.log(props.userData)
    })
    const responseGoogle = (response) => {
        let profile = response.profileObj;
        if(profile) {
            console.log(profile);
            let data ={
                type: 1, /// Google login
                first_name :profile.givenName,
                last_name: profile.familyName,
                email: profile.email,
                avatar : profile.imageUrl,
                google_id : profile.googleId
            }
            useJwt.post('clients/login',data).then((res) => {
    
                props.login(res.data.user_info);
                props.onHide();
                toast.success(res.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    //reset();
            }).catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  const data = error.response.data
                //   console.log(data)
                //   console.log(error.response.status)
                //   console.log(error.response.headers)
                toast.error(data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
    
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request)
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message)
                }
                return true;
                }
            )
        }

      }
    
    /// Facebook Response
    const responseFacebook = (response) => {
        console.log(response);
    }
    const {register , handleSubmit , errors} = useForm();

    return (
        <>
        <Modal
        {...props}
        dialogClassName="modal__size modal modal-open 
            modal-dialog modal.fade modal-dialog-scrollable 
            modal-dialog-centered"
        centered
        >
            <Modal.Body className="modal-body modal-content">
                <div className="modal__wrapper">
                    <p className="closeModal__button" onClick={props.onHide}>x</p>
                    <h2>Sign In to X12VA</h2>
                    <form>
                        <input type="text" placeholder="Email Address" name="email"/><br/>
                        <input type="password" placeholder="Password" name="password"/><br/>
                        <button type="submit">Login</button><br/>
                        <a href="#">Forgot Password?</a><br/>
                        <span>or login with</span>
                    </form>
                    <div className="social__icons">
                      
                        <span>
                            <GoogleLogin
                                clientId={'37103895504-563d6facsgksu796bmd8u3902smevt8k.apps.googleusercontent.com'}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                icon={false}
                                cookiePolicy={'single_host_origin'}
                                
                                render={(renderProps)=><img onClick={renderProps.onClick} src={icon1} alt="" />}
                                style={{backgroundColor:'red',display:'none'}}
                            >
                            </GoogleLogin>
                        </span>
                        <span>
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={false}
                            
                                fields="name,email,picture"
                                //onClick={componentClicked}
                                callback={responseFacebook}
                                tag={(renderProps)=><img style={{width:'23px'}} onClick={renderProps.onClick} src={icon2} alt="" />}
            
                            >
                            </FacebookLogin>
                        </span>
                        <span><img src={icon3} alt="" /></span>
                    </div>
                    <span>Don’t have an account? <a href="#" >Create Account</a></span>
                    
                </div>
            </Modal.Body>
        </Modal>

        {/* For new user */}
        <Modal
        {...props}
        show={true}
        dialogClassName="modal__size modal modal-open 
            modal-dialog modal.fade modal-dialog-scrollable 
            modal-dialog-centered"
        centered
        >
            <Modal.Body className="modal-body modal-content">
                <div className="modal__wrapper">
                    <p className="closeModal__button" onClick={props.onHide}>x</p>
                    <h2>Join X12VA</h2>
                    <form>
                        <input type="text" placeholder="Choose a Username" name="email"/><br/>
                        <input type="password" placeholder="Choose a Password" name="password"/><br/>
                        <button type="submit">Login</button><br/>
                        <a href="#">Forgot Password?</a><br/>
                        <span>or login with</span>
                    </form>
                  
                    <span>Don’t have an account? <a href="#" >Create Account</a></span>
                    
                </div>
            </Modal.Body>
        </Modal>
        </>
        
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
