import React from 'react'
import { useDropzone } from 'react-dropzone';
import EverySectionHeader from '../../EverySectionHeader'
import './UpdateORderFile.css'

function UpdateOrderFile() {
    
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
            <EverySectionHeader
                title="Update Your Order"
            />
            <div className="tOrder__inner">
                <h3 className="help__title"><span className="title__blue">Hi Dear,</span> Here you can update your order</h3>
                <p>Here Your work will be uploaded as some parts of it get completed.</p>
                <textarea name="" id="" 
                    className="trackorder__feedback"
                    placeholder="Type your message here"
                >
                </textarea>
                <div {...getRootProps()} className="helpFile__drag mt-2">
                    <input {...getInputProps()} />
                    <p>Drag and Drop file here</p>
                    {/* <br /> */}
                    <p>OR</p>
                    <button type="button" onClick={open}>
                        Select Files
                    </button>
                </div>
                <button className="updateOrderFile__btn">Upload</button>
            </div>
        </div>
    )
}

export default UpdateOrderFile
