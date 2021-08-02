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

function WalletDetails(props) {
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();

    const [loaded,setLoaded] =React.useState(true)
  

    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="My Wallet"
                />
                <div className="refc__inner px-0 py-0">
                    <div className="wallet-detail-top">
                        <h5 className="mb-0 d-inline-block" style={{fontWeight:600}}>Balance &nbsp; &nbsp; <span>$200</span></h5>
                        <div className="float-right d-inline-block">
                            <Link className="btn-theme-default btn-sm mr-3">Withdraw</Link>
                            <Link className="btn-theme-default btn-sm">TopUp</Link>
                        </div>
                    </div>
                    <div className="d-flex wallet-detail-container">
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span> 150.50</p>
                            <p className="item-heading">AVAILABLE FOR WITHDRAWAL</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span> -150.50</p>
                            <p className="item-heading">USED FOR PURCHASES</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span> 150.50</p>
                            <p className="item-heading">WITHDRAWN</p>
                        </div>
                        <div className="wallet-detail-item">
                            <p className="item-amount"><span className="currency">$</span> 150.50</p>
                            <p className="item-heading">TOPUP</p>
                        </div>
                        
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
export default connect(mapStateToProps,mapDispatchToProps)(WalletDetails)
