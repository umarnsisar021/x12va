import useJwt from '@utils'
import { connect } from 'react-redux';
function SiteConfig (props) {
    useJwt.post('config/get_company_config').then((res)=>{
        if(res.data){
           props.setSiteConfig(res.data.data);
        }
    })
    return null
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        setSiteConfig: (data) => dispatch({ type: 'SITE_CONFIG', payload:data }),
    }
  }
  export default connect(null,mapDispatchToProps)(SiteConfig)