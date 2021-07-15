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
                <div className="wrapper__innerBox w-80">
                    <div className="proposal__form">
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <div className="porposal__inputBox">
                                <label>Subject</label>
                                <input type="text"  defaultValue="" {...register("description",{required:true})}/>
                            </div>

                            <div className="porposal__inputBox">
                                <label>Problem Statement</label>
                                <input type="text" placeholder="Lorem Ipsum" />
                            </div>

                            <div className="porposal__inputBox">
                                <label>Description</label>
                                <textarea type="text"
                                    className="descInput"
                                    placeholder="Kindly explain the problem.
                                    How would you solve the problem?
                                    Explain about the concepts or methodology you will use."
                                />
                            </div>

                            <div className="porposal__inputBox budgetBox">
                                <label>Budget</label>
                                <input type="text" placeholder="$0.00" />
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