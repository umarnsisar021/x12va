import React from 'react'
import EverySectionHeader from '../../EverySectionHeader'
import './SendProposal.css'

function SendProposal() {
    return (
        <div>
            <EverySectionHeader
                title="Send Proposal"
            />
            <div className="wrapper__box">
                <div className="wrapper__innerBox">
                    <div className="proposal__form">
                        <form action="">
                            <div className="porposal__inputBox">
                                <label>Subject</label>
                                <input type="text" />
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

export default SendProposal
