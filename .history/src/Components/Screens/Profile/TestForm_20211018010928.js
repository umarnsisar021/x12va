import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { useQueryLocation } from '../../Util';
import Countdown from 'react-countdown';
import InputError from "@components/InputError";

function TestForm(props) {
    const history = useHistory();
    let query =  useQueryLocation();
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();

    const [loaded,setLoaded] =React.useState(false)
    const [data,setData] =React.useState(null)
    const [test_attempt_id,setTest_attempt_id] =React.useState(null)
    const [test_id,setTest_id] =React.useState(null)
    const [modal,setModal] =React.useState(false)

    const token = props.sessionToken
    useEffect(async ()=>{
       if(Object.keys(query.data.questions).length > 0){
            setData(query.data.questions)
            setTest_attempt_id(query.data.test_attempt_id)
            setTest_id(query.data.test_id)
       }
       else{
           
       }
      
        setTimeout(()=>{
            setLoaded(true)
        },1000)
       
    },[])
    const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
        return <input {...props} defaultValue={defaultValue} ref={inputRef} />;
      };
      const HandleStartTest =(data)=>{
        props.showFadeLoader('Submitting your answers.')
        let TempArray = [];
        Object.keys(data.answers).map((i)=>{
            TempArray.push({question_id:i,option_id:data.answers[i]['option_id']})
        })
        data['token'] = props.sessionToken;
        data['test_attempt_id'] = test_attempt_id;
        data['answers'] = TempArray;
        setTimeout(()=>{
            useJwt.post('test/end_test',data).then((res)=>{
                props.hideFadeLoader('')
                history.push({
                    pathname: '/expert/skill/test/completed',
                    data: { show:true}
                })
             })
        },2000)
         
        
      }

    if(data){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Test Details"
                />
                <div className="refc__inner" style={{padding:'40px'}}>
                    {errors.answers && <p><InputError text="Please do all the questions."/></p> }
                    <div style={{position: 'fixed',right: 0,background: '#066fc0',padding: '20px',boxShadow: '0px 2px 10px #eae9e9',color: 'white',borderRadius: '10px 0px 0px 10px'}}>
                        <h6>Time Remaining</h6>
                        <Countdown date={Date.now() + toSeconds(query.data.duration)} renderer={({ hours, minutes, seconds, completed }) =>{
                            if (completed) {
                                // Render a completed state
                                return false;
                              } else {
                                // Render a countdown 
                                return <p className="my-0" style={{color:'white'}}>{hours > 0 ? `${hours} hours`:''} {minutes > 0 ? `${minutes} min`:''} {seconds > 0 ? `${seconds} sec`:''}</p>;
                              }
                        }} />
                    </div>
                    { Object.values(data).map((q ,index)=>{
                        return <div> <p><Avatar color={'#066fc0'} name={`${index+1}`} round={true} size={22}  textSizeRatio={2}
                        />&emsp; {q.question}</p>
                            <p></p>
                          
                            <div className="pb-3" style={{paddingLeft:'40px'}}>
                                {
                                   Object.values(q.options).length > 0 : <>
                                   {Object.values(q.options).map((option ,i)=> {
                                     return  <div className="form-check pb-2"> <input type="radio" id={`radio-${q.id}-${i}`} value={option.id} className="form-check-input"  {...register("answers["+`${q.id}`+"][option_id]",{required:true})}/> <label for={`radio-${q.id}-${i}`} className="form-check-label"> {option.option}</label></div>
                                   })}</> :
                                  <textarea ></textarea>
                                }
                              
                            </div>
                        </div>
                        
                    }) }
                    <div className="mt-3">
                        <button className="btn-theme-default float-right" onClick={handleSubmit(HandleStartTest)}>Submit Now</button>
                    </div>
                </div>
            </div>
           
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
const toSeconds = function (hms) {
   // your input string
    var a = hms.split(':'); // split it at the colons
    
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = a[0]*3600+a[1]*60+(+a[2]);
    return seconds * 1000;
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
export default connect(mapStateToProps,mapDispatchToProps)(TestForm)
