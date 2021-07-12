import React, { useEffect } from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import GlobalLoader from '@components/GlobalLoader'
import Avatar from 'react-avatar'
import { connect } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { AlertCircle ,Clock,CheckCircle} from 'react-feather';
import { useHistory } from 'react-router'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom';
import { useQueryLocation } from '../../Util';

function TestForm(props) {
    const history = useHistory();
    let query =  useQueryLocation();
    const { register, handleSubmit,control, watch, formState: { errors } ,reset} = useForm();

    const [loaded,setLoaded] =React.useState(false)
    const [data,setData] =React.useState(null)
    const [modal,setModal] =React.useState(false)

    const token = props.sessionToken
    useEffect(async ()=>{
       if(Object.keys(query.data.questions).length > 0){
            setData(query.data.questions)
       }
       else{
           
       }
      
        setTimeout(()=>{
            setLoaded(true)
        },1000)
       
    },[])
    const CustomInput = ({ value, defaultValue, inputRef, ...props }) => {
        return <input {...props} defaultValue={defaultValue} ref={inputRef} />;
      };
      const HandleStartTest =()=>{
      
        //  useJwt.post('test/start_test',{token:token,test_id: data.record.id}).then((res)=>{

        //  })
      }

    if(data){
        return (
        <React.Fragment>
            <div className="wrapper__main">
                <EverySectionHeader
                    title="Test Details"
                />
                <div className="refc__inner" style={{padding:'40px'}}>
                    { Object.values(data).map((q ,index)=>{
                        return <p> <Avatar color={'#066fc0'} name={`${index+1}`} round={true} size={22}  textSizeRatio={2}
                        /> {q.question}</p>
                    }) }
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
export default connect(mapStateToProps,mapDispatchToProps)(TestForm)
