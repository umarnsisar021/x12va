import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle, ChevronsDown} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom';
import TransactionHistoryComponent from './TransactionHistoryComponent'
import Avatar from 'react-avatar';
import DataTable from 'react-data-table-component';
import CongAvatar from '../../../Assets/Images/congratsIcon.png'
function OrderHistory(props) {
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();
    const [data,setData] =React.useState([]);
    const [loaded,setLoaded] =React.useState(false);
    useEffect(()=>{
        const Run = async ()=>{
            useJwt.post('transaction/get_wallet_summary',{token:props.sessionToken}).then((res)=>{
                if(res.data){
                   
                    setData(res.data);
                    setLoaded(true);
                }
            })
        }   
        Run();
    },[])

    const columns = [
        {
            name: 'DATE',
            minWidth: '10%',
            selector: 'Name',
            sortable: false,
            cell: row => row.created_at
        },
        {
            name: 'DESCRIPTION',
            minWidth: '50%',
            selector: 'Name',
            sortable: false,
            cell: row => (<div style={{alignItems: 'center'}}>
                
                    <span className='align-middle  pl-2'>{row.description}</span>
                </div>)
        },
        {
            name: 'DURATION',
            minWidth: '',
            selector: 'Name',
            sortable: false,
            cell: row => (<div style={{alignItems: 'center'}}>
                   
                    <span className='align-middle  pl-2'>{row.description}</span>
                </div>)
         },
        {
            name: 'AMOUNT',
            minWidth: '',
            right:true,
            selector: 'Name',
            sortable: false,
            cell: row => (
                <div className={"px-4 font-weight-bold"} style={{textAlign:'right',width:'100%'}}>
                    {row.debit > 0 ? <span style={{color:'green'}}>{row.debit}</span> : <span style={{color:'red'}}>-{row.credit}</span>}
                </div>
            )
        },

]

const dataToRender = () => {
    return [
        {
            id:"1",
            date:"Aug 03, 2021 ",
            description:"Account & Finance",
            amount:"1",
        }
        
    ]
}
    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Order History"
                />
                <div className="refc__inner px-4 py-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="">Order ID # 21</h4>
                        <h4 className="">$200.00</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div>
                                <Avatar round size={55} src="https://x12va.s3.ap-south-1.amazonaws.com/avatars/umarnisar021-28.png"/>
                            </div>
                            <div className="pl-2">
                                <h6 className="">radiofreedotorg</h6>
                                <h6 className="color-gray">June 29, 2021</h6>
                            </div>
                        </div>
                        <div>
                            <h6>25 Days</h6>
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
                </div>
                {/* ORDER STARTED */}
                <div className="refc__inner px-4 py-4">
                    <div className="d-flex justify-content-center">
                        <img src="" /> 
                    </div>
                </div>
            </div>

            </React.Fragment>
        )
    }
    else{
        return <GlobalLoader></GlobalLoader>
    }
   
}

const toMinutes = function (hms) {
    
    var a = hms.split(':'); // split it at the colons
    // Hours are worth 60 minutes.
    var minutes = (+a[0]) * 60 + (+a[1]);
    return minutes
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
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData}
  }
export default connect(mapStateToProps,mapDispatchToProps)(OrderHistory)
