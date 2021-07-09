import React from 'react'
import Loader from "react-loader-spinner";
import { connect } from 'react-redux'
const FadeLoader = (props)=>{
    return (
        <div className="cp__section" style={{padding: "10px",height:'272px',background:"#eeeeee"}}>
            <div id="global-loader">
                    <div>
                        <Loader
                            type="MutatingDots"
                            color="#066FC0"
                            height={100}
                            width={100}
                            timeout={30000} //3 secs
                        />
                        {
                            props.text ? <text>{props.text}</text> : ''
                        }
                    </div>

            </div> 
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      setFadedLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', userData:data.user_info, token:data.token }),
    }
  }
function mapStateToProps(state) {
    const { utils } = state
    return { fadeLoader : utils.fadeLoader ,}
  }
export default connect(mapStateToProps)(FadeLoader)
