import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './UserReferenceCode.css'
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
     /// To get Skills
     const getSkills = async () => {
        await useJwt.post('skills').then((res)=>{
            props.SET_SKILLS(res.data.records);
            setSkills(res.data.records);
        }) 
    }
    useEffect(async ()=>{
        let temp_skills = [];
        await useJwt.post('skills').then((res)=>{
           
            res.data.records.skillsData.map((skill)=>{
                 temp_skills.push({value:skill.id,label: skill.name })
            })
            setSkills(res.data.records);
        }) 

        // props.skillsData.map((skill)=>{
        //     temp_skills.push({value:skill.id,label: skill.name })
        // })
        setTimeout(()=>{
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
        let d_o_b = new Date(data.d_o_b)
        data.d_o_b = `${d_o_b.getFullYear()}-${d_o_b.getMonth() + 1}-${d_o_b.getDate()}`
        data["token"] = props.sessionToken;
        data["middle_name"] = '';
        data["gender"] = data.gender.value;
        useJwt.post('experts/register_as_a_reference_code',data).then((res)=>{
          
            if(res.data.status !== 400){
                props.login(res.data);
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
            <div className="refc__wrapper">
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
                            
                           
                            <button type="submit" className="btn-theme-default mt-4">Submit</button>
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
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
  }
export default connect(mapStateToProps,mapDispatchToProps)(ExpertSkillForm)
