import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './UserReferenceCode.css'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select'
import { AlertCircle } from 'react-feather';
import Flatpickr from "react-flatpickr";
import { useHistory } from 'react-router'

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
        console.log(data);
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
                                <input type="text" value={props.userData.first_name} placeholder="John Doe" readOnly={true} />
                            </div>
                            <div className="rfcInput__box">
                                <span>Last Name</span>
                                <input type="text" value={props.userData.last_name} placeholder="John Doe" readOnly={true} />
                            </div>
                            <div className="rfcInput__box">
                                <span>Date of birth</span>
                                <Controller
                                control={control}
                                defaultValue={"2020-01-31"}
                                {...register("d_o_b", { required: true })}
                                render={({ field }) => <Flatpickr  {...field} defaultValue="2020-01-31" options={{ defaultDate: "2017-01-01" }}   />}
                            />
                            {errors['d_o_b'] && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                            </div>
                            <div className="rfcInput__box">
                                <span>Gender</span>
                                <Controller
                                control={control}
                                defaultValue=""
                                {...register("gender", { required: true })}
                                render={({ field }) => <Select  {...field} options={genderOptions} />}
                            />
                            {errors.gender && <error style={{ color: '#e87c7c',marginTop: '7px',display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                            </div>
                            <div className="rfcInput__box">
                                <span>Enter Email Address</span>

                                <input type="email"  placeholder="info@gmail.com"  defaultValue={props.userData.email} {...register("email",{required:true})}  readOnly={true}/>
                            </div>
                            <div className="rfcInput__box">
                                <span>Enter Reference Code</span>
                                <input type="text" reference_code placeholder="Reference Code" />
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
    return { userData : auth.userData }
  }
export default connect(mapStateToProps)(UserReferenceCode)
