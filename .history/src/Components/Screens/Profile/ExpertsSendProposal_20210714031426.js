import React from 'react'
import { useForm } from 'react-hook-form'
import EverySectionHeader from '../../EverySectionHeader'
import useJwt from '@util';
import './SendProposal.css'

function ExpertsSendProposal(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =(data)=>{
        data['token'] = props.sessionToken;
        data['token'] = props.sessionToken;
        useJwt.post('experts/send_proposal_task',data)
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

export default ExpertsSendProposal
