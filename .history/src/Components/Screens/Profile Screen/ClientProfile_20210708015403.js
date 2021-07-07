import React, { useState } from 'react'
import './ClientProfile.css'
import EverySectionHeader from '../../EverySectionHeader'
import ClientProfileSidebar from './ClientProfileComponents/ClientProfileSidebar'
import ClientProfileDetails from './ClientProfileComponents/ClientProfileDetails'
import HeaderButton from '../../HeaderButton'
import useJwt from '../../Util'
import {useQuery} from '../../Util'
import { connect } from 'react-redux'
  

function ClientProfile(props) {
    let query = useQuery();
    const self = query.get("self");
    const [userData , setUserData] = useState();
    const myComponent = <HeaderButton title="My Order" />
    React.useEffect(()=>{
        if(self === 'true'){
            setUserData(props.userData)
        }
    },[])
    if(userData){
        return (
            <div className="cpMain__wrapper">
                <EverySectionHeader
                    title="Client Profile"
                    childComponent={myComponent}
                />
                <div className="cp__section">
                    <ClientProfileSidebar data={userData} />
                    <ClientProfileDetails/>
                </div>
            </div>
        )
    }
    else{
        return false
    }
   
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
