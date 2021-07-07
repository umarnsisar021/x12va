import React, { useCallback, useState } from 'react';
import './VerifiersForm.css';
import { useDropzone } from 'react-dropzone';

function VerifiersForm() {
                
        const { acceptedFiles, 
                getRootProps, 
                getInputProps,
                open
            } = useDropzone({accept: "image/*", noClick: true, noKeyboard: true});
        const files = acceptedFiles.map(file => (
            <li key={file.path}>
                {file.path} 
            </li>
        ));

    return (
        <div className="form__wrapperCont">
            <form>
                <label>Enter Your Order Number</label>
                <input type="text" placeholder="Enter here"/>

                <label>Enter Your Subject</label>
                <input type="text" placeholder="Enter here"/>
                
                <label>Enter Problem Statement.</label>
                <input type="text" placeholder="Enter here"/>
                
                <div {...getRootProps()} className="file__drag">
                    <input {...getInputProps()}/>
                    <p>
                        Drag and Drop&nbsp;
                        <span className="FileDragblue__span">
                            Requirements
                        </span> 
                        &nbsp;file here
                    </p>
                    <p>OR</p>
                    <button type="button" onClick={open}>
                        Select Files
                    </button>
                </div>
                <div {...getRootProps()} className="file__drag">
                    <input {...getInputProps()}/>
                    <p>
                        Drag and Drop&nbsp; 
                         <span className="FileDragblue__span">
                            Solution
                        </span> 
                        &nbsp;files here
                    </p>
                    <p>OR</p>
                    <button type="button" onClick={open}>
                        Select Files
                    </button>
                </div>
                <ul> {files} </ul>
            </form>
        </div>
    )
}

export default VerifiersForm
