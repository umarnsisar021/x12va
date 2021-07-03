import React from 'react'
import { useDropzone } from 'react-dropzone';
import EverySectionHeader from '../../EverySectionHeader'
import './ExpertResult.css'
import useJwt from '../../Util'
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


async function getBase64(file) {
    
    let res= '';
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    reader.onload = await function () {
        return reader.result
      };
    return
 }
function ExpertResult() {
    let skill_id = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [expertsCount , setExpertsCount] = React.useState(null);
    React.useEffect(()=>{
        useJwt.post("find_total_experts",{skill_id:skill_id}).then((res)=>{
            if(res.data.records) {
                console.log(res)
                setExpertsCount(res.data.records)
            }
        })
    },[skill_id])
   
    
    const { acceptedFiles, 
        getRootProps,
        getInputProps,
        open
    } = useDropzone({multiple:false,  accept: "image/*,application/pdf, application/vnd.ms-excel,application/octet-stream,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", noClick: true, noKeyboard: true });
    const filesList = acceptedFiles.map(file => getBase64(file));
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
     /// To submit task
     const onSubmit = async (data) => {
        if(filesList.length > 0){
            data['document'] = await getBase64(acceptedFiles[0]);
            console.log(data)
        }
        else{
            toast.error('Please select document', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
      
    };
   

    if(expertsCount){
        return (
            <div className="er__wrapper">
                <EverySectionHeader
                    title="Expert Results"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="er__inner">
                    <h4><span>{expertsCount} experts found </span> according to your requirement</h4>
                    <div className="er__detailsBox">
                       
                        <div className="details__inner">
                            
                            <p>Describe Your task and upload all relevant documents</p>
                            <input type="text"
                                defaultValue="" {...register("description",{required:true})} 
                                placeholder="Description of your task"
                            />
                             {errors.description && <span className="input-error">This field is required.</span>}
                            <div {...getRootProps()} className="helpFile__drag mt-2">
                                <input {...getInputProps() } />
                                {files}
                                <p>Drag and Drop file here</p>
                                {/* <br /> */}
                                <p>OR</p>
                                <button type="button" onClick={open}>
                                    Select Files
                                </button>
                                {/* {files && <span className="input-error">Please select the file.</span>} */}
                            </div>
                            
                        </div>
                        <div className="OrImgIcon"></div>
                      
                        <div className="mt-4 mb-2">
                            <button type="submit" className="btn-theme-default">Next</button>
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
                </form>
            </div>
        )
    }
    else{
        return false;
    }
}

export default ExpertResult
