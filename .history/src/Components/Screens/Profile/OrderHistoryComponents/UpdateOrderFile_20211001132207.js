import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import EverySectionHeader from '../../../EverySectionHeader'
import useJwt from '@utils'
import './UpdateORderFile.css'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

async function getBase64(file) {

    return  new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            resolve(reader.result);
        };
    })
 }
    
function UpdateOrderFile(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { acceptedFiles,
        getRootProps,
        getInputProps,
        open
    } = useDropzone({ accept: "image/*", noClick: true, noKeyboard: true });
    const filesList = acceptedFiles.map(file => getBase64(file));
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.name}
        </li>
    ));

     /// To submit task Update
     const onSubmit = async (data) => {
        props.showFadeLoader('');
       if(filesList.length > 0){
           data['document'] = await getBase64(acceptedFiles[0]);
           data['task_id'] = props.data.task_detail.task_id
           data['token'] = props.sessionToken;
           useJwt.post("experts/update_task",data).then((res)=>{
               if(res) {
                  props.hideFadeLoader('');
                  Swal.fire(
                    'Successfully',
                    'Your update has been posted.',
                    'success'
                  )
                  props.callback();
                
               }
           }).catch(function (error) {
               if (error.response) {
                   props.hideFadeLoader('');
                 // Request made and server responded
                 const data = error.response.data
               toast.error(data.message, {
                   position: "bottom-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   });

               } else if (error.request) {
                 // The request was made but no response was received
                 console.log(error.request)
               } else {
                 // Something happened in setting up the request that triggered an Error
                 console.log('Error', error.message)
               }
               return true;
               }
           )
       }
       else{
        props.hideFadeLoader('');
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

    if (props.data.expert.member_id == props.userData.id) {
        if (props.data.task_detail.status != 3 || props.task_detail.status != 4) {
            return (
                <div className="updateOrder__file">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="tOrder__inner my-3" >
                            <h5 className=""><span className="title__blue">Hi Dear,</span> Here you can update your order</h5>
                            <p className="f-14">Here Your work will be uploaded as some parts of it get completed.</p>
                            <textarea id="" 
                                className="update_order_text_field"
                                placeholder="Type your message here"
                                defaultValue="" {...register("note",{required:true})}
                                
                            >
                            </textarea>
                            {
                                filesList.length > 0 ? <p className="mt-3">{files}</p>
                                    : <div {...getRootProps()} className="helpFile__drag mt-2">
                                    <input {...getInputProps()}  />
                                    <p>Drag and Drop file here</p>
                                    {/* <br /> */}
                                    
                        
                                    <button type="button" className="button btn-sm" onClick={open}>
                                        Select Files
                                    </button>
                                </div>
                            }
                            
                            <button className="btn-theme-default button btn-sm" style={{alignSelf:'center'}}>Upload</button>
                        </div>
                    </form>
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

export default UpdateOrderFile
