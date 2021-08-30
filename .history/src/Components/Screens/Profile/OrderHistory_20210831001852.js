import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom';
import TransactionHistoryComponent from './TransactionHistoryComponent'

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

    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Order History"
                />
                <div className="refc__inner px-0 py-0">
                    <div className="d-flex "></div>
                    <div className="d-flex "></div>
                </div>

                <div className="refc__inner px-0 py-0" style={{boxShadow:'none',backgroundColor:'transparent'}}>
                   
                    <TransactionHistoryComponent  data={data.records}/>
                    
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
