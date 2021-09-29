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
    const { register, handleSubmit,control, watch, setValue, formState: { errors } ,reset} = useForm();
    const [data,setData] =React.useState([]);
    const [loaded,setLoaded] =React.useState(true);
    const [modal , setModal] = React.useState(false);
    useEffect(()=>{
       
    },[])
    // 
    const onSubmitTopUp = (data)=>{
        data.token = props.sessionToken
        console.log(data)
        // useJwt.post('transaction/add_payment',{token:props.sessionToken}).then((res)=>{
        //     if(res.data){
        //         setData(res.data);
        //         setLoaded(true);
        //     }
        // })
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
                            <form onSubmit={handleSubmit(onSubmitTopUp)}>
                                <div className="mb-3">
                                    <input type="text" placeholder="Card Holder Name" name="card_holder_name" defaultValue=""  {...register("card_holder_name", { required: true })}/><br/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder="Amount"  defaultValue=""  {...register("amount", { required: true })}/><br/>
                                </div>
                                <Number
                                    onChange={({value, valid}) => setValue("card_no",value)}
                                    render={({
                                        getInputProps,
                                        valid,
                                        type
                                    }) => {
                                       
                                        let img = CreditCardImages.placeholder
                                        if(type =="Mastercard"){
                                            img = CreditCardImages.mastercard
                                        }
                                        else if(type == "Visa"){
                                            img = CreditCardImages.visa
                                        }
                                        else if(type == "American Express"){
                                            img = CreditCardImages.amex
                                        }
                                        return  <div className="mb-3" style={{position:'relative'}}>
                                                    <input {...register("card_no", { required: true })} {...getInputProps()} defaultValue=""  className={valid ? '' : 'error'} />
                                                    <img style={{position:'absolute',width:'40px',right: '7px',top: '8px'}} src={img} />
                                                </div>
                                        }}
                                     
                                />

                                <div className="row mb-3">
                                    <div className="col-md-6 ">
                                        <Cvc
                                            onChange={({value, valid}) => setValue("cw_code",value)}
                                            render={({
                                                getInputProps,
                                                valid,
                                                type
                                            }) => {
                                                
                                                return  <div style={{position:'relative'}}>
                                                            <input {...register("cw_code", { required: true })} {...getInputProps()} defaultValue=""  className={valid ? '' : 'error'} />
                                                        </div>
                                                }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <Expiration
                                            render={({
                                                getInputProps,
                                                valid,
                                                month, 
                                                year 
                                            }) => {
                                                setValue("exp_month",month)
                                                setValue("exp_year",year)
                                                return  <div style={{position:'relative'}}>
                                                            <input defaultValue="" {...register("_exp", { required: true })} {...getInputProps()}   className={valid ? '' : 'error'} />
                                                        </div>
                                                }}
                                        />
                                    </div>
                                </div>
                               
                                
                                <p style={{textAlign: 'initial',fontSize:'12px'}}>All of your details are secure and encrypted.</p>
                                <button type="submit">TopUp Now</button><br/>
                            </form>
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
