import React from 'react'
import './Help.css'
import EverySectionHeader from '../../EverySectionHeader'
import { useDropzone } from 'react-dropzone';

function Help() {

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
        <div className="help__wrapper">
            <EverySectionHeader
                title="Take Help"
            />
            <div className="help__inner">
                <h3 className="help__title"><span className="title__blue">Welcome</span> to technical description help</h3>
                <p>
                    We have always thought that describing a task technically
                    keeping in mind relevant technical terms is crucial.
                    It is sometimes not possible for the person who needs
                    help with specific task. Therefore, we have this
                    option where you describe your task and it will
                    be sent to our team of experts. They will analyze
                    and interpret your task in technical, to the point
                    and accurate terms. That way, you can avoid confusions,
                    save time and energy and work with relevant experts.
                </p>
                <label>Describe your task an upload relevant document.</label>
                <textarea 
                    name="" 
                    placeholder="Type your message here"
                >
                </textarea>
                <div {...getRootProps()} className="helpFile__drag">
                    <input {...getInputProps()} />
                    <p>Drag and Drop file here</p>
                    {/* <br /> */}
                    <p>OR</p>
                    <button type="button" onClick={open}>
                        Select Files
                    </button>
                </div>
                <div className="helpSubmit__btn">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Help
