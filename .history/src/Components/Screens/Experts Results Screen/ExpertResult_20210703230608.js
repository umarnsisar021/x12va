import React from 'react'
import { useDropzone } from 'react-dropzone';
import EverySectionHeader from '../../EverySectionHeader'
import './ExpertResult.css'
import useJwt from '../../Util'
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
function getBase64(file) {
    
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
function ExpertResult() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    let skill_id = useParams();
    const [expertsCount , setExpertsCount] = React.useState(null);
    const { acceptedFiles, 
        getRootProps,
        getInputProps,
        open
    } = useDropzone({multiple:false,  accept: "image/*,application/pdf, application/vnd.ms-excel,application/octet-stream", noClick: true, noKeyboard: true });
    const filesList = acceptedFiles.map(file => getBase64(file));
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
    React.useEffect(()=>{
        console.log(filesList)
        useJwt.post("find_total_experts",{skill_id:skill_id}).then((res)=>{
            if(res.data.records) {
                console.log(res)
                setExpertsCount(res.data.records)
            }
        })
    },[skill_id])

    if(expertsCount){
        return (
            <div className="er__wrapper">
                <EverySectionHeader
                    title="Expert Results"
                />
                <div className="er__inner">
                    <h4><span>{expertsCount} experts found </span> according to your requirement</h4>
                    <div className="er__detailsBox">
                        <div className="details__inner">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p>Describe Your task and upload all relevant documents</p>
                            <input type="text"
                                defaultValue="test" {...register("example")} 
                                placeholder="Description of your task"
                            />
                            <div {...getRootProps()} className="helpFile__drag mt-2">
                                <input {...getInputProps()} />
                                {files}
                                <p>Drag and Drop file here</p>
                                {/* <br /> */}
                                <p>OR</p>
                                <button type="button" onClick={open}>
                                    Select Files
                                </button>
                            </div>
                        </form>
                        </div>
                        <div className="OrImgIcon"></div>
                      
                        <div className="mt-4 mb-2">
                            <button className="btn-theme-default">Next</button>
                        </div>
                        
                    </div>
                    <div className="er__furtherDetails">
                        <div className="er__fLeft">
                            <p>
                                Take help of our team who will understand
                                your task and describe it for you.
                            </p>
                            <button>Take Help</button>
                        </div>
                        <div className="er__fRight"></div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ExpertResult
