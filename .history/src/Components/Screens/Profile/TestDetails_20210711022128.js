import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
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
                <div className="refc__inner" style={{padding:'40px'}}>
                    <h3>{data.record.name}</h3>
                    {data.record.description ?  <p>{data.record.description}</p> : ''}
                    <div className="mt-5" id="test-details-content" style={{display:'flex',justifyContent: 'space-between'}}>
                        <div id="test-details-item">
                            <span id="test-details-item-icon" style={{background: '#066fc073',color:'white'}}><Clock /></span>
                            <span>{data.record.name.toHHMMSS()}</span>
                        </div>
                       
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


String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + ':' + minutes + ':' + seconds;
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
