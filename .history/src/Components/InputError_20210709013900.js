import React from 'react'
import Loader from "react-loader-spinner";
import { AlertCircle } from 'react-feather';
const InputError = (props)=>{
    return (
        <error style={{ color: '#e87c7c',marginTop: '7px',display: 'block' } {...props.containerStyle}><AlertCircle color="#e87c7c" size={12} /> {props.text}</error>
    )
}
export default InputError
