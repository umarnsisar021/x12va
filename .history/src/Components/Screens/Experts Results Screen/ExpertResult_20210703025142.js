import React from 'react'
import { useDropzone } from 'react-dropzone';
import EverySectionHeader from '../../EverySectionHeader'
import './ExpertResult.css'
import useJwt from '../../Util'
import { useParams } from 'react-router-dom';
function ExpertResult() {
    let skill_id = useParams();
    const [expertsCount , setExpertsCount] = React.useState(null);
    const {
        getRootProps,
        getInputProps,
        open
    } = useDropzone({ accept: "image/*", noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
    React.useEffect(()=>{
        console.log(files)
        useJwt.post("find_total_experts",{skill_id:skill_id}).then((res)=>{
            if(res.data.records) {
                console.log(res)
                setExpertsCount(res.data.records)
            }
        })
    },[])

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
                            <p>Describe Your task and upload all relevant documents</p>
                            <input type="text"
                                placeholder="Description of your task"
                            />
                            <div {...getRootProps()} className="helpFile__drag mt-2">
                                <input {...getInputProps()} />
                                <p>Drag and Drop file here</p>
                                {/* <br /> */}
                                <p>OR</p>
                                <button type="button" onClick={open}>
                                    Select Files
                                </button>
                            </div>
                        </div>
                        <div className="OrImgIcon"></div>
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
