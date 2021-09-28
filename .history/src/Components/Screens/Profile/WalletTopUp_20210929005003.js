import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom';
import TransactionHistoryComponent from './TransactionHistoryComponent'
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
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
            <Link className="btn-theme-default btn-sm">TopUp</Link>
            <Modal
                show={modal}
                dialogClassName="modal__size modal modal-open
                    modal-dialog modal.fade modal-dialog-scrollable
                    modal-dialog-centered"
                centered
            >
                <Modal.Body className="modal-body modal-content">
                        <div className="modal__wrapper">
                            <p className="closeModal__button" onClick={()=>{}}>x</p>
                            <h2>Join X12VA</h2>
                            <form onSubmit={handleSubmit(onSubmitSetUsername)}>
                                <input type="text" placeholder="Choose a Username" name="username" defaultValue="" {...register("username", { required: true })}/><br/>
                                <input type="password" placeholder="Choose a Password" name="password" defaultValue="" {...register("password", { required: true })} /><br/>
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
