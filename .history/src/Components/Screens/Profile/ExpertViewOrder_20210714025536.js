import React, { useEffect } from 'react'

import Table from 'react-bootstrap/Table'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ArrowDownCircle, ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt from '../../Util'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { useParams, useLocation, useHistory, Link } from 'react-router-dom'
function ExpertViewOrder(props) {
    const { data} = useLocation();
    const history =   useHistory();
    props.showFadeLoader('')
   
    useEffect(()=>{

        setTimeout(()=>{
            props.hideFadeLoader('')
            if(data){
             
            }
            else{
                history.push('/experts/orders/new')
            }
        },1500)
    })

    if (data){
        return (
            <React.Fragment>
                <EverySectionHeader
                    title="View Proposal"
                />
                <div className="wrapper__box">
                    <div className="wrapper__innerBox" style={{ padding: '45px', }}>
                        <div style={{ width: '100%', background: '#F7FFFD', padding: '60px 45px', border: '1px solid #7DC3B4', borderRadius: '5px'}}>
                            <Row>
                                <h4 className="text-uppercase font-weight-bold">ORDER ID: #{data.id}</h4>
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
                                <h6 className="text-uppercase font-weight-bold">DOCUMENT</h6>
                            </Row>
                            <Row>
                                <p className="">{data.document.replace(/^.*[\\\/]/, '')} <ArrowDownCircle className="pointer" onClick={()=>{
                                     const win = window.open(data.document, "_blank");
                                     win.focus();
                                }}></ArrowDownCircle></p>
                            </Row>

                            <Row className="mt-3">
                                <div style={{display: 'flex',columnGap: '10px'}}>
                                    <button className="btn-theme-white btn-theme-sm btn-theme-border-default "><Link to={{pathname: '/experts/order/view', data: row}}>Send Proposal</Link></button>
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
