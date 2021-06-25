import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './Signup.css'

import "../../styles/flatpickr/custom.css";
/// Third Party
import Flatpickr from "react-flatpickr";
import Select from 'react-select'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle } from 'react-feather';

function Signup() {
    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]
    const { register, handleSubmit,control, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="refc__wrapper">
            <EverySectionHeader
                title="Create Account"
            />
            <div className="refc__inner">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rfcUser__details">
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
                                {...register("d-o-b", { required: true })}
                                render={({ field }) => <Flatpickr {...field} />}
                            />
                            {errors['d-o-b'] && <error style={{ color: '#e87c7c', marginTop: '7px', display: 'block' }}><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
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
        </div>
    )
}

export default Signup
