import React, { useEffect } from 'react'

import Table from 'react-bootstrap/Table'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ArrowDownCircle, ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt, { useQuery } from '@utils'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { useParams, useLocation, useHistory, Link } from 'react-router-dom'
function ExpertViewOrder(props) {
    let { data} = useLocation();
    let history = useHistory();
    const query =   useQuery();
    const [taskData,setTaskData] = React.useState(null);
    props.showFadeLoader('')
   
    useEffect(()=>{

        setTimeout(()=>{
            
            
            if(query.get('id')){
                let task_id = query.get('id');
                useJwt.post('tasks/get_task_by_id',{task_id:task_id,token:props.sessionToken}).then((res)=>{
                    if(Object.keys(res.data.records).length > 0){
                        setTaskData(res.data.records)
                        props.hideFadeLoader('')
                    }
                    else{
                        history.push('/experts/orders/new')
                    }
                })
                
            }
            else{
                if(data){
                    setTaskData(data)
                }
                else{
                    history.push('/experts/orders/new')
                }
            }
            
        },1500)
    },[])

    if (taskData){
        return (
            <React.Fragment>
                <EverySectionHeader
                    title="View Proposal"
                />
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '45px', }}>
                        <div style={{ width: '100%', background: '#F7FFFD', padding: '60px 45px', border: '1px solid #7DC3B4', borderRadius: '5px'}}>
                            <Row>
                                <h4 className="text-uppercase font-weight-bold">ORDER ID: #{taskData.id}</h4>
                            </Row>
                           
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DESCRIPTION</h6>
                            </Row>
                            <Row>
                                <p className="">{taskData.description}</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DAYS</h6>
                            </Row>
                            <Row>
                                <p className="">{taskData.days} days</p>
                            </Row>
                            <Row className="mt-3">
                                <h6 className="text-uppercase font-weight-bold">DOCUMENT</h6>
                            </Row>
                            <Row>
                                <p className="">{taskData.document.replace(/^.*[\\\/]/, '')} <ArrowDownCircle className="pointer" onClick={()=>{
                                     const win = window.open(taskData.document, "_blank");
                                     win.focus();
                                }}></ArrowDownCircle></p>
                            </Row>

                            <Row className="mt-3">
                                <div style={{display: 'flex',columnGap: '10px'}}>
                                    {
                                        taskData.proposal_id ? <Link to={{pathname: 'experts/proposals/view/24'+taskData.proposal_id, data: taskData}}><button disable className="btn-theme-white btn-theme-sm btn-theme-border-default ">View My Proposal</button></Link> : <Link to={{pathname: '/experts/order/view/sendproposal', data: taskData}}><button disable className="btn-theme-white btn-theme-sm btn-theme-border-default ">Send Proposal</button></Link>
                                    }
                                
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
export default connect(mapStateToProps,mapDispatchToProps)(ExpertViewOrder)
