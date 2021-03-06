import React, { useEffect, useState } from 'react'
import './Proposals.css'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import useJwt from '../../Util'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { useParams, useLocation } from 'react-router-dom'
function ExepertProposalView(props) {
    let {id} = useParams();
    const [data,setData] = useState(null)
    props.showFadeLoader('')
    useEffect(()=>{
        if(id){
            setTimeout(()=>{
                useJwt.post('experts/get_proposal_by_id',{token:props.sessionToken,proposal_id:id}).then((res)=>{
                    setData(res.data.records);
                    props.hideFadeLoader();
                })  
            },1500)
        }
       
    },[id])
    
    if (data){
        return (
            <React.Fragment style={{display: 'grid'}}>
                <EverySectionHeader
                    title="Your Sent Proposal"
                />
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '45px', }}>
                        <div style={{ width: '100%', background: '#F7FFFD', padding: '60px 45px', border: '1px solid #7DC3B4', borderRadius: '5px'}}>
                            <Row>
                                <h4 className="text-uppercase font-weight-bold">ORDER ID #{data.task_id}</h4>
                            </Row>
                            <Row>
                                <h6 className="text-uppercase font-weight-bold">PROBLEM STATEMENT</h6>
                            </Row>
                            <Row>
                                <p className="">{data.problem_statement}</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DESCRIPTION</h6>
                            </Row>
                            <Row>
                                <p className="">{data.description}</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DAYS</h6>
                            </Row>
                            <Row>
                                <p className="">{data.days} days</p>
                            </Row>
                            <Row className="mt-3">
                                <h5 className="">BUDGET: <strong className="color-theme-green">&nbsp;${data.total_payable}</strong></h5>
                            </Row>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    else{
    return false
    }

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
export default connect(mapStateToProps,mapDispatchToProps)(ExepertProposalView)
