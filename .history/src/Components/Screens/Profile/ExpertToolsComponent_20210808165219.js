import React, { useEffect, useState } from 'react'
import './ProfileDetails.css'
import ToolLangSkillsTile from './ToolLangSkillsTile'
import ContentLoader from "react-content-loader"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

/// Redux 
import {connect} from 'react-redux'
import useJwt from '@utils'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import GoogleLogin from 'react-google-login'


async function getTools () {
    let data = [];
     await useJwt.post('experts/get_my_tools',{token:props.sessionToken}).then((res)=>{
        data = res.data.records
    })
    return  data
} 
const MySwal = withReactContent(Swal)
function ExpertToolsComponent  (props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data,setData] = useState(null)
    const [loaded,setLoaded] = useState(null)
    const [modal,setModal] = useState(false)
    const onHideModal = () =>{
        setModal(false)
    }
    const onShowModal = () =>{
        setModal(true)
    }
    useEffect(()=>{
        setTimeout(async ()=>{
           let tools =  await getTools();
           setData(tools)
           setLoaded(true);
        },1000)
      
    },[])
    const  onSubmit = async (data)=>{
        
        useJwt.post('experts/tool_add',{...data,token:props.sessionToken}).then((res)=>{
            setLoaded(false);
            if(res){
               
                toast.success(res.data.message,{})
                onHideModal()
                let tools =  await getTools();
                setData(tools);
                setLoaded(true);
            }
        }).catch((error)=>{
            if(error.response){
                toast.error(error.response.data.message,{})
            }
        })
    }
    const deleteTool = async (id) => {
        useJwt.post('experts/tool_delete',{id:id,token:props.sessionToken}).then((res)=>{
                toast.success(res.data.message,{})
                setLoaded(false);
                let tools =  await getTools();
                setData(tools);
                setLoaded(true);
            })
    }
     if(loaded){
        return (
            <div className="skills__sec">
                <div className="skillsInner__sec">
                    <h5 className="blue__heading">Tools</h5>
                    <Link onClick={()=>{onShowModal()}}><button className="buttontype2" >Add New</button></Link>
                </div>
                <hr/>
                <div className="toolLangSkills__wrapper">
                    {
                        Object.values(data).map((i)=>{
                            return <ToolLangSkillsTile
                                        title={`${i.name}`}
                                        onDelete={()=>{
                                            MySwal.fire({
                                                title: <p>This Action will not be reversible.</p>,
                                                showCancelButton:true,
                                                showConfirmButton:true,
                                                icon: 'warning',
                                                confirmButtonColor:'#079f80',
                                                confirmButtonText:'Confirm',
                                                cancelButtonText: 'Cancel',
                                              }).then((result) => {
                                                    if(result.value){
                                                        deleteTool(i.id)
                                                    }
                                              })
                                        }}
                                        {...i}
                            />
                        })
                    }
                  
                </div>
                <Modal
                    show={modal}
                    dialogClassName="modal__size modal modal-open
                        modal-dialog modal.fade modal-dialog-scrollable
                        modal-dialog-centered"
                    centered
                    >
                        <Modal.Body className="modal-body modal-content">
                            <div className="modal__wrapper">
                                <p className="closeModal__button" onClick={()=>onHideModal()}>x</p>
                                <h2>Add New Tool</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text" placeholder="Enter Tool Name" name="username" defaultValue="" {...register("name", { required: true })}/><br/>
                                    <button className="btn-theme-default w-60" style={{width:'50%'}} type="submit">Submit</button><br/>
                                </form>

                            </div>
                        </Modal.Body>
                    </Modal>
            </div>
            
        )
    }
    else{
        return <ContentLoader 
        speed={2}
        width={'100%'}
        height={124}
        viewBox="0 0 700 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        style={{marginTop:'10px',width:"100%"}}
      >
        <rect x="0" y="1" rx="0" ry="0" width="70" height="24" /> 
        <rect x="0" y="35" rx="0" ry="0" width="508" height="0" /> 
        <rect x="0" y="36" rx="0" ry="0" width="468" height="2" /> 
        <rect x="0" y="49" rx="0" ry="0" width="114" height="30" /> 
        <rect x="130" y="50" rx="0" ry="0" width="114" height="30" /> 
        <rect x="260" y="50" rx="0" ry="0" width="114" height="30" /> 
        
       
      </ContentLoader>;
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpertToolsComponent )
