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
        setSiteConfig: (data) => dispatch({ type: 'LOGIN', userData:data.user_info, token:data.token }),
        setToken: (data) => dispatch({ type: 'LOGIN', payload:data }),
        showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true', text: text }),
        hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false, text:''}),
    }
  }
  export default connect()(SiteConfig)