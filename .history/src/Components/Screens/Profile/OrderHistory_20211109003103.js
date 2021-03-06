import React, { useEffect, useState } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import Moment from 'react-moment';
import { ArrowDownCircle} from 'react-feather';
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import Avatar from 'react-avatar';
import DataTable from 'react-data-table-component';
import CongAvatar from '../../../Assets/Images/congratsIcon.png'
import UpdateOrderFile from './OrderHistoryComponents/UpdateOrderFile'
import UpdateCommentsComponent from './OrderHistoryComponents/UpdateCommentsComponent'
import ClientUpdateOrderComponent from './OrderHistoryComponents/ClientUpdateOrderComponent'
import RattingAndRemarks from './OrderHistoryComponents/RattingAndRemarks'
import VerifierRatingAndRemarks from './OrderHistoryComponents/VerifierRatingAndRemarks'
import moment from 'moment'

function OrderHistory(props) {
    
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
                        <h4 className="">${data.proposal.budget}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div>
                                <Avatar round size={55} src={data.client.avatar}/>
                            </div>
                            <div className="pl-2">
                                <h6 className="">{data.client.name}</h6>
                                <h6 className="color-gray f-14"><Moment format="MMM DD, YYYY">{data.task_detail.created_at}</Moment></h6>
                            </div>
                        </div>
                        <div>
                            <h6>{data.task_detail.days > 1 ? data.task_detail.days+" Days" : data.task_detail.days+" Day" }</h6>
                        </div>
                    </div>
                    <hr className="mt-3" />
                    <div>
                       
                        <DataTable
                            noHeader
                            responsive
                            columns={columns}
                            className='react-dataTable'
                            data={dataToRender()}
                        />
                    </div>
                    <CountdownMonths targetTime={time}/>
                </div>
                {/* ORDER STARTED */}
                <div className="refc__inner px-4 py-4 my-3">
                    <div className="text-center">
                        <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                        <h6 className="py-2">ORDER STARTED</h6>
                        <p>The order countdown is now ticking please keep updating your work</p>
                    </div>
                </div>
                {/* ORDER STARTED */}
                {
                    Object.values(data.updates).map((u,u_index)=>{
                        return  <div className="refc__inner px-4 py-4 my-3">
                                    <div className="text-center">
                                        <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                        <h6 className="py-2">HERE'S YOUR DELIVERY!</h6>
                                        
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Avatar round size={40} src={data.expert.avatar}/>
                                            </div>
                                            <div className="pl-2" style={{display:"list-item"}}>
                                                <h6 className="f-14 mb-1">{data.expert.name}</h6>
                                                <h6 className="color-gray f-12"><Moment format="MMM DD, YYYY">{u.created_at}</Moment></h6>
                                            </div>
                                        </div>
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
                                    {
                                        u.note != '' ?
                                        <div className="py-2">
                                            <p><strong>Note: </strong>{u.note}</p>
                                        </div>
                                        :
                                        null
                                    }

                                    <div>
                                        <h6>COMMENTS</h6>
                                        <UpdateCommentsComponent 
                                            key={u_index} 
                                            update_id={u.id} 
                                            comments={u.comments} 
                                            client={data.client} 
                                            expert={data.expert} 
                                            userData={props.userData} 
                                            sessionToken={props.sessionToken}
                                            account_mode={account_mode}
                                        />
                                    </div>    
                                </div>
                    })
                }
                {/* show update form for expert */}
                <UpdateOrderFile callback={Run}  data={data} userData={props.userData} sessionToken={props.sessionToken} showFadeLoader={props.showFadeLoader} hideFadeLoader={props.hideFadeLoader}  />
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
export default connect(mapStateToProps,mapDispatchToProps)(OrderHistory)


export const CountdownMonths = (props) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const targetTime = moment(props.targetTime);
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(()=> {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='countdown-wrapper'>


                { timeBetween.months() > 0 ?
                    <div className='countdown-item'>
                        {timeBetween.months()} 
                        <span>months</span>
                    </div> : null
                }


                {
                 timeBetween.days() >= 0 ?
                   <div className='countdown-item'>
                        {timeBetween.days()} 
                        <span>days</span>
                    </div> : <div className='countdown-item'>
                        {0} 
                        <span>days</span>
                    </div>
                }
                
                {
                 timeBetween.hours() >= 0 ?
                        <div className='countdown-item'>							
                            
                            {timeBetween.hours()} 
                            <span>hours</span>
                        </div> : <div className='countdown-item'>							
                    
                            {0} 
                            <span>hours</span>
                        </div>
                }

                {
                 timeBetween.minutes() >= 0 ?
                        <div className='countdown-item'>							
                            
                            {timeBetween.minutes()} 
                            <span>minutes</span>
                        </div> : <div className='countdown-item'>							
                    
                            {0} 
                            <span>minutes</span>
                        </div>
                }

                {
                    timeBetween.seconds() >= 0 ?
                        <div className='countdown-item'>							
                            
                            {timeBetween.seconds()} 
                            <span>seconds</span>
                        </div> : <div className='countdown-item'>							
                    
                            {0} 
                            <span>seconds</span>
                        </div>
                }
        </div>
    </>
  );
};