import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
import useJwt from '@utils'
function SiteConfig (props) {
    useJwt.post('config/get_company_config')
    return null
  }
  
  export default SiteConfig