import React from 'react'
import { useDropzone } from 'react-dropzone';
import EverySectionHeader from '../../EverySectionHeader'
import useJwt from '../../Util'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Congratulations from '../Congratulations/Congratulations'
import GloabalLoader from '../../GlobalLoader'
async function getBase64(file) {

    return  new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            resolve(reader.result);
        };
    })
 }
function BecomeVerifier(props) {
    // let {skill_id} = useParams();
    let history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [expertsCount , setExpertsCount] = React.useState(null);
    const [loaded , setLoaded] = React.useState(true);
    React.useEffect(()=>{
        // setTimeout(()=>{
        //     useJwt.post("find_total_experts",{skill_id:skill_id}).then((res)=>{
        //             setExpertsCount(res.data.records)
        //     },1500)
        // },[])

    },[])


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
        props.showFadeLoader('');
        if(filesList.length > 0){
            data['document'] = await getBase64(acceptedFiles[0]);
            data['token'] = props.sessionToken;
            useJwt.post("clients/add_task",data).then((res)=>{
                if(res.data.task_id) {
                   props.hideFadeLoader('');
                   Swal.fire(
                    'Successfully',
                    'Your update has been posted.',
                    'success'
                  );
                }
            }).catch(function (error) {
                props.hideFadeLoader('');
                if (error.response) {
                    
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
                    Swal.fire(
                        'Warning',
                        data.message,
                        'success'
                    );

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


    if (loaded){
        return (

            <div className="er__wrapper">
                {/* <Route path="/congratulations" exact>
                    <Congratulations/>
                </Route> */}
                <EverySectionHeader
                    title="Become a verifier"
                />
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper__innerBox" style={{background:'transparent'}}>
                    <h4></h4>
                    <div className="p-5" style={{background:'white'}}>

                        <div className="details__inner" >

                            <p className="input-label" style={{}}>Subject</p>
                            <input type="text"
                                defaultValue="" {...register("subject",{required:true})}
                                placeholder="Enter your subject"
                            />
                             {errors.description && <span className="input-error">This field is required.</span>}
                            <p className="input-label">Tell us more about yourself</p>
                            <textarea type="number"
                                className="mt-2"
                                defaultValue="" {...register("t_u_m_a_y",{required:true})}
                                placeholder="Enter your description"
                            />
                             {errors.days && <span className="input-error">This field is required.</span>}
                            <div {...getRootProps()} className="helpFile__drag mt-4">
                                <input {...getInputProps() } />
                                {files}
                                <p>Upload Documents that can help us review your application</p>
                                {/* <br /> */}
                                <p>OR</p>
                                <button type="button" onClick={open}>
                                    Select Files
                                </button>
                                {/* {files && <span className="input-error">Please select the file.</span>} */}
                            </div>
                            <div className="mt-4 mb-2 text-left">
                                <button type="submit" className="btn-theme-default px-4">Send Application</button>
                            </div>
                        </div>
                      

                    </div>
                </div>
                </form>
            </div>
        )
    }
    else{
        return <GloabalLoader text="Looking for experts..." />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', userData:data.user_info, token:data.token }),
      setToken: (data) => dispatch({ type: 'LOGIN', payload:data }),
      showFadeLoader: (text) => dispatch({type:'SET_FADE_LOADER', payload: 'true', text: text }),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false, text: '' }),

    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData,
            sessionToken : auth.sessionToken
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BecomeVerifier)
