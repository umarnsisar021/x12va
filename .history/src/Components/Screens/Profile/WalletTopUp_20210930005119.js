import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import {Number, Cvc, Expiration} from 'react-credit-card-primitives'
import CreditCardImages from '@images/CreditCardImages'
function WalletTopUp(props) {
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
    const [data,setData] =React.useState([]);
    const [loaded,setLoaded] =React.useState(false);
    const [modal , setModal] = React.useState(false);
    useEffect(()=>{
        const Run = async ()=>{
            useJwt.post('transaction/get_wallet_summary',{token:props.sessionToken}).then((res)=>{
                if(res.data){
                    setData(res.data);
                    setLoaded(true);
                }
            })
        }   
        Run();
    },[])
    // 
    const onSubmitSetUsername = ()=>{

    }
    if(loaded){
        return (
        <React.Fragment>
            <Link className="btn-theme-default btn-sm" onClick={()=>setModal(true)}>TopUp</Link>
            <Modal
                show={modal}
                dialogClassName="modal__size modal__50 modal modal-open
                    modal-dialog modal.fade modal-dialog-scrollable
                    modal-dialog-centered"
                centered
            >
                <Modal.Body className="modal-body modal-content">
                        <div className="modal__wrapper">
                            <p className="closeModal__button" onClick={()=>{setModal(false)}}>x</p>
                            <h2 style={{fontWeight:"500"}}>Fill your Card Details for TopUp</h2>
                            <form onSubmit={handleSubmit(onSubmitSetUsername)}>
                                <input type="text" placeholder="Card Holder Name" name="card_holder_name" defaultValue="1"  {...register("card_holder_name", { required: true })}/><br/>
                                <Number
                                    onChange={({value, valid}) => console.log(value, valid)}
                                    render={({
                                        getInputProps,
                                        valid,
                                        type
                                    }) => {
                                        let img = CreditCardImages.placeholder
                                        if(type=="Mastercard"){
                                            img = CreditCardImages.mastercard
                                        }
                                        else if(type == "Visa"){
                                            img = CreditCardImages.visa
                                        }
                                        else if(type == "American Express"){
                                            img = CreditCardImages.amex
                                        }
                                        return  <div>
                                                    <input {...getInputProps()} className={valid ? '' : 'error'} />
                                                    <img style={{position:'absolute',width:'40px'}} src={CreditCardImages['placeholder']} />
                                                </div>
                                        }}
                                     
                                />
                                <br/>
                                <p style={{textAlign: 'initial',fontSize:'12px'}}>8 characters or longer. Combine upper and lowercase letters and numbers.</p>
                                <button type="submit">Login</button><br/>
                            </form>

                            <span>Don’t have an account? <a href="#" >Create Account</a></span>

                        </div>
                </Modal.Body>
            </Modal>
            
        </React.Fragment>
        )
    }
    else{
        return <GlobalLoader></GlobalLoader>
    }
   
}

const toMinutes = function (hms) {
    
    var a = hms.split(':'); // split it at the colons
    // Hours are worth 60 minutes.
    var minutes = (+a[0]) * 60 + (+a[1]);
    return minutes
}
   
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', userData:data.user_info, token:data.token }),
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
  }
export default connect(mapStateToProps,mapDispatchToProps)(WalletTopUp)
