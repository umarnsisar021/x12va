import React from 'react'
import { useForm } from 'react-hook-form'
import EverySectionHeader from '../../EverySectionHeader'
import './SendProposal.css'

function ExpertsSendProposal() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =(data)=>{

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
                                    defaultValue="" {...register("problem_statement",{required:true})}
                                />
                            </div>

                            <div className="porposal__inputBox budgetBox">
                                <label>Budget</label>
                                <input type="number" placeholder="$0.00" />
                            </div>
                            <div>
                                <button className="buttonType__one">Send Proposal</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertsSendProposal
