import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
import useJwt from '@utils'
import { connect } from 'react-redux';
function SiteConfig (props) {
    useJwt.post('config/get_company_config').then((res)=>{

    })
    return null
  }
  
  export default connect()(SiteConfig)