import React from 'react'
import Loader from "react-loader-spinner";
const GlobalLoader = (props)=>{
    return (
        <div id="global-loader">
                <div>
                    <Loader
                        type="MutatingDots"
                        color="#066FC0"
                        height={80}
                        width={80}
                        timeout={30000} //3 secs
                    />
                    {
                        props.text ? <text>{props.text}</text> : ''
                    }
                </div>

        </div> 
    )
}
export default GlobalLoader
