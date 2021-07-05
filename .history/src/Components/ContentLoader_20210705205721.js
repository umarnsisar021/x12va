import React from 'react'
import Loader from "react-loader-spinner";
const ContentLoader = (props)=>{
    return (
        <div class="cp__section" style="padding: 10px;">
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
        </div>
    )
}
export default ContentLoader
