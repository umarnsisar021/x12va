import React, { useEffect, useState } from 'react'
import EverySectionHeader from '../../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import Moment from 'react-moment';
import { ArrowDownCircle} from 'react-feather';
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import default_profile from '@images/default-profile.png';
import CongAvatar from '@images/congratsIcon.png'
import UpdateOrderFile from './../OrderHistoryComponents/UpdateOrderFile'
import OrderRattingAndRemarks from './OrderRattingAndRemarks'
import ClientUpdateOrderComponent from './../OrderHistoryComponents/ClientUpdateOrderComponent'
import RattingAndRemarks from './../OrderHistoryComponents/RattingAndRemarks'
import moment from 'moment'

function OrderRemarkForm(props) {
    
    let params = useParams();
    const id = params.task_id;
    const account_mode = props.account_mode;
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
    const [data,setData] =React.useState([]);
    const [loaded,setLoaded] =React.useState(false);
    const Run = async ()=>{
        useJwt.post('tasks/get_task_detail',{task_id:id,token:props.sessionToken}).then((res)=>{
            if(res.data){
                setData(res.data);
                setLoaded(true);
            }
        })
    }   
    useEffect(()=>{
        
        Run();
    },[])

    const columns = [
        {
            name: 'DATE',
            minWidth: '10%',
            selector: 'Name',
            sortable: false,
            cell: row =>  <Moment style={{fontWeight:500}} format="MMM DD, YYYY">{row.created_at}</Moment> 
        },
        {
            name: 'DESCRIPTION',
            minWidth: '50%',
            selector: 'Name',
            sortable: false,
            cell: row => (<div style={{alignItems: 'center'}}>
                    <span className='align-middle' style={{fontWeight:500}}>{row.description}</span>
                </div>)
        },
        {
            name: 'DURATION',
            minWidth: '',
            selector: 'Name',
            sortable: false,
            cell: row => (<div style={{alignItems: 'center'}}>
                    <span className='align-middle' style={{fontWeight:500}}>{row.days > 1 ? row.days+" Days" : row.days+" Day" }</span>
                </div>)
         },
        {
            name: 'AMOUNT',
            minWidth: '',
            right:true,
            selector: 'Name',
            sortable: false,
            cell: row => (
                <div className={"px-3 font-weight-bold"} style={{textAlign:'right',width:'100%'}}>
                    ${row.budget}
                </div>
            )
        },

]

const dataToRender = () => {
    return [{...data.proposal,...data.task_detail}]
}
    if(loaded){
        let time =  moment(data.task_detail.start_time).add(data.task_detail.days, 'days').format('YYYY-MM-DD h:mm:ss a');
     
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Order History"
                />
                <div className="refc__inner px-4 py-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="">Order ID #{data.task_detail.task_id}</h4>
                        <h5 className=""></h5>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex" style={{borderRight:'1px solid #E2E2E2',width:'49%'}}>
                           {/*  */}
                            <div>
                                {/*  */}
                                <div className="d-flex">
                                    <div>
                                        <Avatar round size={35} src={data.client.avatar ? data.client.avatar : default_profile }/>
                                    </div>
                                    <div className="pl-2 pt-2">
                                        <h6 className="">{data.client.name}</h6>
                                    </div>
                                </div>
                                {/*  */}
                                    <div className="f-14 mt-4      ">
                                        <p className="m-0"><strong>Skill :</strong> {data.task_detail.skill_name}</p>
                                    </div>
                                    <div className="pt-2 f-14">
                                        <p className="m-0"><strong>Description :</strong> {data.task_detail.description}</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="">{ data.task_detail.document ? data.task_detail.document.replace(/^.*[\\\/]/, '') : ''}  
                                            <ArrowDownCircle className="pointer ml-1" size={18} onClick={()=>{
                                            const win = window.open(data.task_detail.document, "_blank");
                                            win.focus();
                                        }}></ArrowDownCircle>
                                        </p>
                                    </div>
                                </div>
                            {/*  */}
                        </div>
                        <div className="d-flex align-items-center" style={{width:'49%'}}>
                               {/*  */}
                               <div>
                                {/*  */}
                                <div className="d-flex">
                                    <div>
                                        <Avatar round size={35} src={data.expert.avatar ? data.expert.avatar : default_profile }/>
                                    </div>
                                    <div className="pl-2 pt-2">
                                        <h6 className="">{data.expert.name}</h6>
                                    </div>
                                </div>
                                {/*  */}
                                    <div className="f-14 mt-4      ">
                                        <p className="m-0"><strong>Problem Statement :</strong> {data.proposal.problem_statement}</p>
                                    </div>
                                    <div className="pt-2 f-14">
                                        <p className="m-0"><strong>Description :</strong> {data.proposal.description}</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="">{ data.task_detail.document ? data.task_detail.document.replace(/^.*[\\\/]/, '') : ''}  
                                            <ArrowDownCircle className="pointer ml-1" size={18} onClick={()=>{
                                            const win = window.open(data.task_detail.document, "_blank");
                                            win.focus();
                                        }}></ArrowDownCircle>
                                        </p>
                                    </div>
                                </div>
                            {/*  */}
                        </div>
                    </div>
                </div>
                {/* ORDER STARTED */}
              
                {/* ORDER STARTED */}
                {
                    Object.values(data.updates).map((u,u_index)=>{
                        return  <div className="refc__inner px-4 py-4 my-3">
                                    <div className="text-center">
                                        <h6 className="py-2 mb-2">DELIVERY!</h6>
                                        <div className="align-items-center">
                                            <div className="mb-2">
                                                <Avatar round size={60} src={data.expert.avatar}/>
                                            </div>
                                            <div className="" style={{}}>
                                                <h6 className="f-14 mb-1">{data.expert.name}</h6>
                                                <h6 className="color-gray f-12"><Moment format="MMM DD, YYYY">{u.created_at}</Moment></h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="text-uppercase m-0 f-12" style={{fontWeight:500}}>Delivered File</p>
                                            <span>
                                                <p className="">{ u.document ? u.document.replace(/^.*[\\\/]/, '') : ''}  
                                                        <ArrowDownCircle className="pointer ml-1" size={18} onClick={()=>{
                                                        const win = window.open(u.document, "_blank");
                                                        win.focus();
                                                    }}></ArrowDownCircle>
                                                </p>
                                            </span>
                                        </div>
                                    </div>
                                 
                                </div>
                    })
                }
                {/* show update form for expert */}
                <OrderRattingAndRemarks callback={Run}  data={data} userData={props.userData} sessionToken={props.sessionToken} showFadeLoader={props.showFadeLoader} hideFadeLoader={props.hideFadeLoader}  />
                <ClientUpdateOrderComponent callback={Run} data={data} userData={props.userData} showFadeLoader={props.showFadeLoader} hideFadeLoader={props.hideFadeLoader} sessionToken={props.sessionToken} />
                <RattingAndRemarks callback={Run} data={data} userData={props.userData} showFadeLoader={props.showFadeLoader} hideFadeLoader={props.hideFadeLoader} sessionToken={props.sessionToken} />
              
            </div>

            </React.Fragment>
        )
    }
    else{
        return <GlobalLoader></GlobalLoader>
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', userData:data.user_info, token:data.token }),
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData ,account_mode:auth.account_mode}
  }
export default connect(mapStateToProps,mapDispatchToProps)(OrderRemarkForm)


