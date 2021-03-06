import React, { useEffect } from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux'
const FadeLoader = (props)=>{
    useEffect(()=>{
        console.log(props.fadeLoader)
    },[props.fadeLoader])
    return  props.fadeLoader ? <div id="fade-loader">
                                    <div>
                                        <Loader
                                            type="MutatingDots"
                                            color="#066FC0"
                                            height={100}
                                            width={100}
                                            timeout={300000} //3 secs
                                        />
                                        {
                                            props.fadeLoaderText !== '' ? <text>{props.fadeLoaderText}</text> : ''
                                        }
                                    </div>  
        </div> : ''
    
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      //setFadedLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload : data }),
    }
  }
function mapStateToProps(state) {
    const { utils } = state
    return { fadeLoader : utils.fade_loader ,fadeLoaderText : utils.fade_loader_text ,}
  }
export default connect(mapStateToProps,mapDispatchToProps)(FadeLoader)
