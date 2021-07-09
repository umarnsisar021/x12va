import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select'
import { AlertCircle } from 'react-feather';
import Flatpickr from "react-flatpickr";
import InputError from "@components/InputError";
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'

function ExpertSkillForm(props) {
    const history = useHistory();
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
 
    const [loaded,setLoaded] =React.useState(false)
    const  [skillOptions,setSkillOptions]  = React.useState([
        // { value: 'male', label: 'Male' },
        // { value: 'female', label: 'Female' },
    ])
    
    useEffect(async ()=>{
        let temp_skills = [];
        await useJwt.post('skills').then((res)=>{
            if(res.data.records){
                Object.values(res.data.records).map((skill)=>{
                    temp_skills.push({value:skill.id,label: skill.name })
                })
            }
        }) 
        setTimeout(()=>{
            setSkillOptions(temp_skills);
            setLoaded(true)
        },1500)
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
                //props.login(res.data);
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
        })
        
      };


    if(loaded){
        return (
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Skills Form"
                />
                <div className="refc__inner">
                    <form onSubmit={handleSubmit(HandleOnSubmit)}>
                        <div className="rfcUser__details">
                            <div className="rfcInput__box">
                                <span>Select your skill</span>
                                <Controller
                                    control={control}
                                    defaultValue=""
                                    {...register("skill_id", { required: true })}
                                    render={({ field }) => <Select  {...field} options={skillOptions} />}
                                />
                                {errors.skill_id && <InputError text="This field is required"/>}
                            </div>
                            
                            <div className="rfcInput__box">
                                <button type="submit" className="btn-theme-default mt-4">Apply Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ExpertSkillForm)
