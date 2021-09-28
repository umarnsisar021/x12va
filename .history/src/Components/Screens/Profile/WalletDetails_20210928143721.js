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
import Swal from 'sweetalert2';
function WalletDetails(props) {
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

    const handlewithdraw = async () =>{
        props.showFadeLoader("")
        useJwt.post("transaction/withdrawal",{token:props.sessionToken}).then((res)=>{
            
            if (res.status == 403) {
          
            }
        }).catch((error)=>{
            if(error.response.data.status == 403){
                Swal.fire({
                    title: 'Oops...',
                    text: 'Your balance seems too low to withdraw!',
                    html:
                    'Your Balance seems too low to withdraw.'
                })
                props.hideFadeLoader("")
            }
        })
    }

    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="My Wallet"
                />
                <div className="refc__inner px-0 py-0">
                    <div className="wallet-detail-top">
                        <h5 className="mb-0 d-inline-block" style={{}}>Balance &nbsp; &nbsp; <span>${data.balance}</span></h5>
                        <div className="float-right d-inline-block">
                            <Link className="btn-theme-default btn-sm mr-3" onClick={()=>{handlewithdraw()}}>Withdraw</Link>
                            <Link className="btn-theme-default btn-sm">TopUp</Link>
                        </div>
                    </div>
                    <div className="d-flex wallet-detail-container">
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span>{data.balance}</p>
                            <p className="item-heading">AVAILABLE FOR WITHDRAWAL</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span>-{data.used_purchase}</p>
                            <p className="item-heading">USED FOR PURCHASES</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span>{data.withdrawal}</p>
                            <p className="item-heading">WITHDRAWN</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span>{data.topup}</p>
                            <p className="item-heading">TOPUP</p>
                        </div>
                        
                    </div>
                    
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
export default connect(mapStateToProps,mapDispatchToProps)(WalletDetails)
