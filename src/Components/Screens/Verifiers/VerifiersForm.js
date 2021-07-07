import React, { useCallback, useState } from 'react';
import './VerifiersForm.css';
import { useDropzone } from 'react-dropzone';


// const baseStyle = {
//     flex: 1,
//     display: 'flex',
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     borderWidth: 2,
//     borderRadius: 2,
//     borderColor: "#000",
//     borderStyle: "dashed",
//     outline: "none",
//     transition: "border .24 ease-in-out"
// };

// const activeStyle = {

// };

function VerifiersForm() {

    // const {file , errors} = useState();

    // const [ files, setFiles ] = useState([]);
    // const onDrop = useCallback(
    //     (acceptedFiles, rejFiles) => {
    //         const mappedAcc = acceptedFiles.map(file => ({file, errors}));
    //         setFiles(curr => [...curr, ...mappedAcc, ...rejFiles]);
    //     },
    //     [],
    // );
        // const { getRootProps, getInputProps } = useDropzone({onDrop});
        
        
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
                    <p>Drag and Drop Requirements file here</p>
                    <br/>
                    <p>OR</p>
                    <button type="button" onClick={open}>
                        Select Files
                    </button>
                </div>
                <div {...getRootProps()} className="file__drag">
                    <input {...getInputProps()}/>
                    <p>Drag and Drop Solution files here</p>
                    <br/>
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
