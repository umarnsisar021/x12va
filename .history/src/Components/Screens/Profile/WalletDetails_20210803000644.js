import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';

function WalletDetails(props) {
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();

    const [loaded,setLoaded] =React.useState(false)
  

    if(loaded){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Test Details"
                />
                <div className="refc__inner" style={{padding:'40px'}}>
                    <h3>{data.record.name}</h3>
                    {data.record.description ?  <p>{data.record.description}</p> : ''}
                    <div className="mt-5" id="test-details-content" style={{display:'flex',columnGap: '50px'}}>
                        <div className="test-details-item">
                            <span className="test-details-item-icon" style={{background: '#066fc0',color:'white'}}><Clock /></span>
                            <span style={{ paddingTop: '3px'}}>
                                <h5 className="my-0" style={{fontSize:'18px'}}>Duration</h5>
                                <p className="my-0">{`${toMinutes(data.record.duration)} mins`}</p>
                            </span>
                        </div>

                        <div className="test-details-item">
                            <span className="test-details-item-icon" style={{background: '#079f80',color:'white'}}><CheckCircle /></span>
                            <span style={{ paddingTop: '3px'}}>
                                <h5 className="my-0" style={{fontSize:'18px'}}>Passing Percentage</h5>
                                <p className="my-0">{`${data.record.passing_percentage}%`}</p>
                            </span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="btn-theme-default float-right" onClick={()=>{HandleStartTest()}}>Start Test</button>
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
3