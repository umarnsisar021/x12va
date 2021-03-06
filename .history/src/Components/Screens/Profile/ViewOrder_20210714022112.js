import React from 'react'
import './Proposals.css'
import Table from 'react-bootstrap/Table'
import EverySectionHeader from '../../EverySectionHeader'
/// Data Table
import ReactPaginate from 'react-paginate'
import { ChevronDown, ChevronLeft, ChevronRight } from 'react-feather'
import DataTable from 'react-data-table-component'
import useJwt from '../../Util'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'
import { useParams, useLocation } from 'react-router-dom'
function ViewOrder(props) {
    const { data} = useLocation();
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
                                <h6 className="text-uppercase font-weight-bold">Problem statement</h6>
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
                                <h5 className="">BUDGET: <strong className="color-theme-green">&nbsp;${data.budget}</strong></h5>
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
    }
}
function mapStateToProps(state) {
    const { auth } = state
    return { userData: auth.userData ,sessionToken: auth.sessionToken }
}
export default connect(mapStateToProps,mapDispatchToProps)(Proposals)
