import React, { useEffect, useState } from 'react'
import './ProfileDetails.css'
import ToolLangSkillsTile from './ToolLangSkillsTile'
import EducationTile from './EducationTile'
import ContentLoader from "react-content-loader"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import  languages  from '@components/data/languages'
import  InputError  from '@components/InputError'
import Flatpickr from "react-flatpickr";
/// Redux 
import {connect} from 'react-redux'
import useJwt from '@utils'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Modal } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { map } from 'async'
import Select from 'react-select'
import eduAvatar from '../../../Assets/Images/eduAvatar.png'
import { AlertCircle } from 'react-feather'
import { Label } from 'reactstrap'


async function getLanguages (token) {
    let data = [];
     await useJwt.post('experts/get_my_languages',{token:token}).then((res)=>{
        data = res.data.records
    })
    return  data
} 
const MySwal = withReactContent(Swal)
function ExpertEducationComponent  (props) {
    const { register, handleSubmit,control, formState: { errors } ,reset} = useForm();
    const [data,setData] = useState(null)
    const [loaded,setLoaded] = useState(null)
    const [modal,setModal] = useState(false)
    const [languagesData,setLanguagesData] = useState([])
    const onHideModal = () =>{
        setModal(false)
    }
    const onShowModal = () =>{
        setModal(true)
    }
    useEffect(()=>{
        setTimeout(async ()=>{
           let tools =  await getLanguages(props.sessionToken);
           let temp = [];
           await languages.map((row)=>{
                temp.push({value:row.name , label:row.name})
                setLanguagesData(temp);
           })
           setData(tools)
           setLoaded(true);
           
        },500)
      
    },[])
    const  onSubmit = async (data)=>{
        props.showFadeLoader()
        data['name'] = data['name']['value']
        useJwt.post('experts/language_add',{...data,token:props.sessionToken}).then( async (res)=>{
            setLoaded(false);
            if(res){
                toast.success(res.data.message,{})
                onHideModal()
                let tools =  await getLanguages(props.sessionToken);
                setData(tools);
                setLoaded(true);
                props.hideFadeLoader()
            }
        }).catch((error)=>{
            if(error.response){
                toast.error(error.response.data.message,{})
            }
        })
    }
    const deleteTool =  (id) => {
        useJwt.post('experts/language_delete',{id:id,token:props.sessionToken}).then( async (res)=>{
                toast.success(res.data.message,{})
                setLoaded(false);
                let tools =  await getLanguages(props.sessionToken);
                setData(tools);
                setLoaded(true);
            })
    }
     if(loaded){
        return (
            <div className="skills__sec">
                <div className="skillsInner__sec">
                    <h5 className="blue__heading">Languages</h5>
                    <Link onClick={()=>{onShowModal()}}><button className="buttontype2" >Add New</button></Link>
                </div>
                <hr/>
                <div className="toolLangSkills__wrapper">
                    {
                        Object.values(data).map((i)=>{
                            return  <EducationTile
                            name="Federation University Australia"
                            degree="Master of Experience Rehabilitation,
                                    Musculoskeletal Rehabilitation,"
                            avatar={eduAvatar}
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
                                <h2>Add Education</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    
                                    <input type="text"  placeholder="Enter University/Institute Name" name="institute_name" defaultValue="" {...register("institute_name", { required: true })}/>
                                    {errors.institute_name && <error className="input-error"><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                      
                                    <input type="text" placeholder="Degree Name" name="degree" defaultValue="" {...register("degree", { required: true })}/>
                                    {errors.degree && <error className="input-error" ><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                                    <Controller
                                        control={control}
                                        defaultValue=""
                                        placeholder="From"
                                        {...register("date_from", { required: true })}
                                        render={({ field }) => <Flatpickr {...field} />}
                                    />
                                    {errors.date_from && <error className="input-error"><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
                                    <br />
                                    <Controller
                                        control={control}
                                        defaultValue=""
                                        placeholder="To"
                                        {...register("date_from", { required: true })}
                                        as={<Flatpickr className="form-control" />}
                                        
                                    />
                                    {errors.date_from && <error className="input-error"><AlertCircle color="#e87c7c" size={12} /> This field is required</error>}
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
export default connect(mapStateToProps,mapDispatchToProps)(ExpertEducationComponent )
