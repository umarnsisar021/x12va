import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
function ClientUpdateOrderComponent(props) {
    let form =  useForm();
    const { acceptedFiles,
        getRootProps,
        getInputProps,
        open
    } = useDropzone({ accept: "image/*", noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
        
    if (props.data.client.member_id == props.userData.id) {
        if (props.data.status !== 3 || props.data.status !== 4) {
            return (
                <div className="updateOrder__file">
                
                    <div className="tOrder__inner my-3" >
                        <h5 className=""><span className="title__blue">Hi Dear,</span> Here you can update your order</h5>
                        <p className="f-14">Here Your work will be uploaded as some parts of it get completed.</p>
                      
                        <button className="btn-theme-default" style={{alignSelf:'center'}}>Upload</button>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
    else{
        return null
    }
}

export default ClientUpdateOrderComponent
