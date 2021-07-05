import React from 'react'
import Loader from "react-loader-spinner";
const GlobalLoader = (props)={
    return (
        <div id="global-loader">
                <div>
                    <Loader
                        type="MutatingDots"
                        color="#066FC0"
                        height={100}
                        width={100}
                        timeout={300000} //3 secs
                    />
                    <text>Searching</text>
                </div>

        </div> 
    )
}
