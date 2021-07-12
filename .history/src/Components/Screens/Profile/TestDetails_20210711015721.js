import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select'
import { AlertCircle } from 'react-feather';
import InputError from "@components/InputError";
import { useHistory } from 'react-router'
import useJwt from '@utils'
import {useQueryLocation ,useQuery} from '@utils'
import { toast } from 'react-toastify'
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function TestDetails(props) {
    const history = useHistory();
    let {skill_id} =  useParams();
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();

    const [loaded,setLoaded] =React.useState(false)
    const [data,setData] =React.useState(null)
    const [modal,setModal] =React.useState(false)

    const token = props.sessionToken
    useEffect(async ()=>{
        console.log(skill_id)
        await useJwt.post('test/get_test_detail',{skill_id:skill_id,token:token}).then((res)=>{
            if(res){
                setData(res.data)
            }
        }) 
        setTimeout(()=>{
            setLoaded(true)
        },1000)
        if(Object.values(props.userData).length > 0){
         
        }
        else{
            history.push('/')
        }
    },[])
    const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
        return <input {...props} defaultValue={defaultValue} ref={inputRef} />;
      };
    
      const HandleOnSubmit = (data) => {
        props.showFadeLoader('')
        data["token"] = props.sessionToken;
        data["skill_id"] = data.skill_id.value;

        useJwt.post('experts/skill_add',data).then((res)=>{
            if(res.data.status !== 400){
                props.hideFadeLoader('')
                toast.success(res.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                if(res.data.status === 201){
                    setModal(true);
                }
            }
            else{
                props.hideFadeLoader('')
                toast.error(res.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((error)=>{
            if(error.response){
                toast.error(error.response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
              
            }
            props.hideFadeLoader('')
        })
        
      };

      const getTestDetail = ()=>{
        setModal(false);
        if(skill_id !==  ''){
            
        }
      }

    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Test Details"
                />
                <div className="refc__inner">
                    <div className="rfcUser__details">
                        <h3></h3>
                        
                        <div className="rfcInput__box">
                            <button type="submit" className="btn-theme-default mt-4">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
           
    
            {/* For new user */}
            <Modal
    
                show={modal}
                dialogClassName="modal__size modal modal-open
                modal-dialog modal.fade modal-dialog-scrollable
                modal-dialog-centered"
                centered
            >
                <Modal.Body className="modal-body modal-content">
                    <div className="modal__wrapper">
                        <p className="closeModal__button" onClick={()=>setModal(false)}>x</p>
                        <h2 className="my-4">Successfully Applied </h2>
                        <p>Start your test to activate your skill.</p>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn-theme-default" onClick={()=>{setModal(false)}}>Skip</button>
                            </div>
                            <div className="col-6">
                                <button className="btn-theme-default" onClick={()=>{getTestDetail()}}>Take Test</button>
                            </div>
                            
                        </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(TestDetails)
