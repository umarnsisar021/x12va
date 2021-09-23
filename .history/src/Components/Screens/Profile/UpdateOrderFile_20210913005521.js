import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import EverySectionHeader from '../../EverySectionHeader'
import './UpdateORderFile.css'

function UpdateOrderFile() {
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

    return (
        <div className="updateOrder__file">
        
            <div className="tOrder__inner" >
                <h5 className=""><span className="title__blue">Hi Dear,</span> Here you can update your order</h5>
                <p className="f-14">Here Your work will be uploaded as some parts of it get completed.</p>
                <textarea name="" id="" 
                    className="update_order_text_field"
                    placeholder="Type your message here"
                >
                </textarea>
                <div {...getRootProps()} className="helpFile__drag mt-2">
                    <input {...getInputProps()}  required/>
                    <p>Drag and Drop file here</p>
                    {/* <br /> */}
          
                    <button type="button btn-sm" onClick={open}>
                        Select Files
                    </button>
                </div>
                <button className="btn-theme-default" style={{alignSelf:'center'}}>Upload</button>
            </div>
        </div>
    )
}

export default UpdateOrderFile
