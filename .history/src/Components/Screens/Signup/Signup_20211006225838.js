import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './Signup.css'

import "../../styles/flatpickr/custom.css";
/// Third Party
import Flatpickr from "react-flatpickr";
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle } from 'react-feather';
import useJwt from '../../Util';
import { ToastContainer, toast } from 'react-toastify';


function Signup() {
    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
    const onSubmit = data => {
        let d_o_b = new Date(data.d_o_b)
        data.d_o_b = `${d_o_b.getFullYear()}-${d_o_b.getMonth() + 1}-${d_o_b.getDate()}`
        data.gender=data.gender.value;
        useJwt.post('clients/register_new_client',data).then((res)=>{
            //console.log(res)
            toast.success(res.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                reset();
        }).catch(function (error) {
            if (error.response) {
              // Request made and server responded
              const data = error.response.data
            //   console.log(data)
            //   console.log(error.response.status)
            //   console.log(error.response.headers)
            toast.error(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request)
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message)
            }
            return true;

          })
    }


    return (
        <div className="wrapper">
            <EverySectionHeader
                title="Create Account"
            />
            <div className="refc__inner">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rfcUser__details">
                    <div className="rfcInput__box">
                            <span>First Name</span>
                            <input defaultValue="" {...register("first_name",{required:true})} type="text" placeholder="First Name" />
                            {errors.first_name && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Last Name</span>
                            <input defaultValue="" {...register("last_name",{required:true})} type="text" placeholder="Last Name" />
                            {errors.last_name && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Username</span>
                            <input defaultValue="" {...register("username",{required:true})} type="text" placeholder="username" />
                            {errors.username && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Email Address</span>
                            <input
                                type="email"
                                defaultValue=""
                                {...register("email", { required: true })}
                                placeholder="info@gmail.com" />
                            {errors.email && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Enter Password</span>
                            <input
                                type="password"
                                placeholder="Password"
                                defaultValue=""
                                {...register("password", { required: true })} />
                            {errors.password && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block'}}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Date of birth</span>
                            <Controller
                                control={control}
                                defaultValue=""
                                {...register("d_o_b", { required: true })}
                                render={({ field }) => <Flatpickr {...field} />}
                            />
                            {errors['d_o_b'] && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                        </div>
                        <div className="rfcInput__box">
                            <span>Gender</span>
                            <Controller
                                control={control}
                                defaultValue=""
                                {...register("gender", { required: true })}
                                render={({ field }) => <Select  {...field} options={options} />}
                            />
                            {errors.gender && <error style={{ color: '#e87c7c',marginTop: '7px',display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}

                        </div>
                    </div>
                    <div className="pt-3">
                        <button className="btn-theme-default">Sign Up</button>
                    </div>
                </form>
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}

export default Signup