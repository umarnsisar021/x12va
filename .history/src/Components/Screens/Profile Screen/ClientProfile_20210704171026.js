import React, { useState } from 'react'
import './ClientProfile.css'
import EverySectionHeader from '../../EverySectionHeader'
import ClientProfileSidebar from './Client profile components/ClientProfileSidebar'
import ClientProfileDetails from './Client profile components/ClientProfileDetails'
import HeaderButton from '../../HeaderButton'
import useJwt from '../../Util'
import {useQuery} from '../../Util'
import { connect } from 'react-redux'
  

function ClientProfile() {
    let query = useQuery();
    const self = query.get("self");
    const [userData , setUserData] = useState();
    const myComponent = <HeaderButton title="My Order"/>
    React.useEffect(()=>{
        if(self === 'true'){
            setUserData()
        }
    },[])
    return (
        <div className="cpMain__wrapper">
            <EverySectionHeader
                title="Client Profile"
                childComponent={myComponent}
            />
            <div className="cp__section">
                <ClientProfileSidebar/>
                <ClientProfileDetails/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      login: (data) => dispatch({ type: 'LOGIN', payload:data }),
    }
  }
function mapStateToProps(state) {
    const { auth } = state
    return { userData : auth.userData }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClientProfile)
