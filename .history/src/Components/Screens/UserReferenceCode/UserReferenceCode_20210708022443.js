import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './UserReferenceCode.css'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";

function UserReferenceCode() {
    const [loaded,setLoaded] =React.useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },1500)
    })
    if(loaded){
        return (
            <div className="refc__wrapper">
                <EverySectionHeader
                    title="User Reference Code"
                />
                <div className="refc__inner">
                    <form action="">
                        <div className="rfcUser__details">
                            <div className="rfcInput__box">
                                <span>First Name</span>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="rfcInput__box">
                                <span>Last Name</span>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div className="rfcInput__box">
                                <span>Date of birth</span>
                                <input type="date" placeholder="John Doe" />
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
                            <div className="rfcInput__box">
                                <span>Enter Email Address</span>
                                <input type="email" placeholder="info@gmail.com" />
                            </div>
                            <div className="rfcInput__box">
                                <span>Enter Reference Code</span>
                                <input type="text" placeholder="Male" />
                                <button className="btn-theme-default mt-4">Submit</button>
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

export default connect()(UserReferenceCode)
