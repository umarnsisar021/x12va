import React from 'react'
import { AlertCircle } from 'react-feather';
const InputError = (props)=>{
    return (
        <error style={{ fontSize:"14px", color: '#e87c7c',marginTop: '7px',display: 'block' }} {...props.containerStyle}><AlertCircle color="#e87c7c" size={12} /> {props.text}</error>
    )
}
export default InputError
