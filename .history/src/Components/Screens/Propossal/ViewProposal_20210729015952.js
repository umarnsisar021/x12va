import React, { useEffect } from 'react'
import './Proposals.css'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import useJwt, { useQuery } from '@utils'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { useParams, useLocation, useHistory } from 'react-router-dom'
import Avatar from 'react-avatar'
function Proposals(props) {
    const [Data,setData] = React.useState(null)
    let { data } = useLocation();
    let history =  useHistory();
    let query = useQuery();
    let id = query.get('id');
    props.showFadeLoader();
    useEffect(()=>{
        if(data){
            setData(data)
            props.hideFadeLoader();
        }
        else if(id) {
            useJwt.post('clients/get_proposal_by_id', {token: props.sessionToken,proposal_id:id}).then((res)=>{
                if(Object.keys(res.data.records).length > 0){
                    setData(res.data.records)
                }
                props.hideFadeLoader();
            })
        }
        else{
           history.goBack();
        }
    },[])
    
    if (Data){
        return (
            <React.Fragment>
                <EverySectionHeader
                    title="View Proposal"
                />
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '45px', }}>
                        <div style={{ width: '100%', background: '#F7FFFD', padding: '60px 45px', border: '1px solid #7DC3B4', borderRadius: '5px'}}>
                            <Row>
                                <div>
                                    #{Data.task_id}
                                </div>
                                <div className="my-5" style={{display:'flex',columnGap: '10px',alignItems: 'center'}}>
                                    <Avatar size={40}  name="Wim Mostmans" round="50%" src={"https://x12va.s3.ap-south-1.amazonaws.com/avatars/user-28.jpg"} />
                                    <strong>{Data.expert_first_name} {Data.expert_last_name}</strong>
                                </div>
                                
                            </Row>
                            
                            <Row>
                                <h6 className="text-uppercase font-weight-bold">Problem statement</h6>
                            </Row>
                            <Row>
                                <p className="">{Data.problem_statement}</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DESCRIPTION</h6>
                            </Row>
                            <Row>
                                <p className="">{Data.description}</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DAYS</h6>
                            </Row>
                            <Row>
                                <p className="">{Data.days} days</p>
                            </Row>
                            <Row className="mt-3">
                                <h5 className="">BUDGET: <strong className="color-theme-green">&nbsp;${Data.budget}</strong></h5>
                            </Row>
                            <Row className="mt-3">
                                <div style={{display: 'flex',columnGap: '10px'}}>
                                    <button className="btn-theme-white btn-theme-sm btn-theme-border-default ">Assign</button>
                                    <button className="btn-theme-white btn-theme-sm btn-theme-border-default ">View Profile</button>
                                    <button className="btn-theme-white btn-theme-sm btn-theme-border-default ">Rate Proposal</button>
                                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Proposals)
