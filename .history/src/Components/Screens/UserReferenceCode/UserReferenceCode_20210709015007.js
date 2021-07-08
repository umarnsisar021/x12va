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

function UserReferenceCode(props) {
    const history = useHistory();
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]
    const [loaded,setLoaded] =React.useState(false)
    const [defaultDate,setDefaultDate] =React.useState('')
    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },1500)
        if(Object.keys(props.userData).length > 0){
            setDefaultDate('20-05-2020')
        }
        else{
            history.push('/')
        }
    })
    const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
        return <input {...props} defaultValue={defaultValue} ref={inputRef} />;
      };
    
      const HandleOnSubmit = (data) => {
        data["token"] = props.sessionToken;
        useJwt.post('experts/register_as_a_reference_code',{data}).then((res)=>{
            console.log(res)
        })
      };


    if(loaded){
        return (
            <div className="refc__wrapper">
                <EverySectionHeader
                    title="User Reference Code"
                />
                <div className="refc__inner">
                    <form onSubmit={handleSubmit(HandleOnSubmit)}>
                        <div className="rfcUser__details">
                            <div className="rfcInput__box">
                                <span>First Name</span>
                                <input type="text" value={props.userData.first_name} defaultValue={props.userData.first_name} {...register("first_name",{required:true})} placeholder="John Doe" readOnly={true} />
                            </div>
                            <div className="rfcInput__box">
                                <span>Last Name</span>
                                <input type="text" value={props.userData.last_name} defaultValue={props.userData.last_name} {...register("last_name",{required:true})} placeholder="John Doe" readOnly={true} />
                            </div>
                            <div className="rfcInput__box">
                                <span>Date of birth</span>
                                <Controller
                                control={control}
                                defaultValue={"2020-01-31"}
                                {...register("d_o_b", { required: true })}
                                render={({ field }) => <Flatpickr  {...field} defaultValue="2020-01-31" options={{ defaultDate: "2017-01-01" }}   />}
                            />
                            {errors['d_o_b'] && <InputError text="This field is required"/>}
                            </div>
                            <div className="rfcInput__box">
                                <span>Gender</span>
                                <Controller
                                control={control}
                                defaultValue=""
                                {...register("gender", { required: true })}
                                render={({ field }) => <Select  {...field} options={genderOptions} />}
                            />
                            {errors.gender && <InputError text="This field is required"/>}
                            </div>
                            <div className="rfcInput__box">
                                <span>Enter Email Address</span>
                                <input type="email"  placeholder="info@gmail.com"  defaultValue={props.userData.email} {...register("email",{required:true})}  readOnly={true}/>
                            </div>
                            <div className="rfcInput__box">
                                <span>Enter Reference Code</span>
                                <input type="text"   defaultValue={""} {...register("reference_code",{required:true})}  placeholder="Reference Code" />
                                {errors.gender && <InputError text="This field is required"/>}
                                <button type="submit" className="btn-theme-default mt-4">Submit</button>
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
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken }
  }
export default connect(mapStateToProps)(UserReferenceCode)
