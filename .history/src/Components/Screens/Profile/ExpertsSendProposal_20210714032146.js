import React from 'react'
import { useForm } from 'react-hook-form'
import EverySectionHeader from '../../EverySectionHeader'
import useJwt from '@utils';
import './SendProposal.css'
import { toast } from 'react-toastify';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

function ExpertsSendProposal(props) {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { data} = useLocation();
    React.useEffect(()=>{

        setTimeout(()=>{
            props.hideFadeLoader('')
            if(data){
             
            }
            else{
                history.push('/experts/orders/new')
            }
        },1500)
    })

    const onSubmit =(postData)=>{
        props.showFadeLoader('Submitting your proposal.')
        postData['token'] = props.sessionToken;
        postData['task_id'] = data.id;
        useJwt.post('experts/send_proposal_task',postData).then((res)=>{
           
        }).catch(function (error) {
            if (error.response) {
              // Request made and server responded
              const data = error.response.data
            toast.error(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            }
        })

    }
    
    return (
        <div className="row">
            <EverySectionHeader
                title="Send Proposal"
            />
            <div className="wrapper__box px-5">
                <div className="wrapper__innerBox "  >
                    <div className="proposal__form" style={{padding:"0px 10%"}}>
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="porposal__inputBox">
                                <label>Subject</label>
                                <input type="text"  defaultValue="" {...register("subject",{required:true})}/>
                            </div>

                            <div className="porposal__inputBox">
                                <label>Problem Statement</label>
                                <input type="text" placeholder="Problem Statement"  defaultValue="" {...register("problem_statement",{required:true})} />
                            </div>

                            <div className="porposal__inputBox">
                                <label>Description</label>
                                <textarea type="text"
                                    className="descInput"
                                    placeholder="Describe your proposal here."
                                    defaultValue="" {...register("description",{required:true})}
                                />
                            </div>

                            <div className="porposal__inputBox budgetBox">
                                <label>Budget</label>
                                <input type="number" placeholder="$0.00" defaultValue="" {...register("budget",{required:true})} />
                            </div>
                            <div>
                                <button type="submit" className="btn-theme-default">Send Proposal</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions
        login: (data) => dispatch({ type: 'LOGIN', payload: data }),
        showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
        hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData: auth.userData ,sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpertsSendProposal)