import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
import useJwt from '@utils'
import { connect } from 'react-redux';
function SiteConfig (props) {
    useJwt.post('config/get_company_config').then((res)=>{

    })
    return null
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        setSiteConfig: (data) => dispatch({ type: 'SITE_CONFIG', userData:data.user_info, token:data.token }),
    }
  }
  export default connect(null,mapDispatchToProps)(SiteConfig)