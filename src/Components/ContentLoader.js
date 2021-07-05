import React from 'react'
import Loader from "react-loader-spinner";
const ContentLoader = (props)=>{
    return (
        <div className="cp__section" style={{padding: "10px",height:'272px',background:"#eeeeee"}}>
            <div id="global-loader">
                    <div>
                        <Loader
                            type="MutatingDots"
                            color="#066FC0"
                            height={100}
                            width={100}
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
