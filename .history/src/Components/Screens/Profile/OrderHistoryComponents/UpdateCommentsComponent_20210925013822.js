import React, { useEffect, useState } from 'react'
import useJwt from '@utils'
import { toast } from 'react-toastify'
import { connect } from 'react-redux'
const UpdateCommentsComponent = (props)=>{
    const [comments,setComments] = useState(props.comments) 
    const [inputText,setInputText] = useState('')
    const handleSubmitUpdateComment =()=>{
        
        if(inputText.length >= 4){
            props.showFadeLoader('Submitting');
            useJwt.post("tasks/task_update_comment_add",{
                token:props.sessionToken,
                update_id:props.update_id,
                comment:inputText
            }).then((res)=>{
                if(res.data){
                    let c = comments;
                    c.push({comment:inputText,member_id:props.userData.id})
                    setComments(c);
                    setInputText("")
                    props.hideFadeLoader('');
                    toast.success("Comment Submitted")
                }
            }).catch((error)=>{
                
            })
        }
        else{
           
        }
       
    }
    useEffect(()=>{

    },[])
    return  <div>
        {
            comments.map((comment,c_index)=>{
                if(comment.member_id == props.userData.id){
                    let name = "me:"
                    return <div className="p-2" key={c_index} style={{borderBottom:"1px solid lightgray"}}>
                                <p className="m-0 f-12" style={{fontWeight:500,color:"black"}}>{name}</p>
                                <p className="m-0 f-12">{comment.comment}</p>
                            </div>
                }
                else{
                    let name = props.account_mode == "client" ? props.expert.name : props.expert.name;
                    return <div className="p-2" key={c_index} style={{borderBottom:"1px solid lightgray"}}>
                                <p className="m-0 f-12" style={{fontWeight:500,color:"black"}}>{name}:</p>
                                <p className="m-0 f-12">{comment.comment}</p>
                            </div>

                    
                }
                
            })
        }
         {   
            comments.length > 0 ?           
            <div className="o-u-c-i-container">
                <input value={inputText} onFocus={inputOnHover} onBlur={inputOnBlur} onChange={(text)=>setInputText(text.target.value)} className="" />
                <button onClick={handleSubmitUpdateComment} className="btn-theme-default py-0 f-12" style={{height:30}} type="submit">Submit</button>
            </div>  
            :
            null 
        }
    </div>  
}

function inputOnHover(elem) {
    elem.target.parentNode.classList.add("hover")
}
function inputOnBlur(elem) {
    elem.target.parentNode.classList.remove("hover")
}

   
const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      showFadeLoader: (text) => dispatch({ type: 'SET_FADE_LOADER', payload: 'true' , text: text}),
      hideFadeLoader: (data) => dispatch({ type: 'SET_FADE_LOADER', payload: false , text:'' }),
    }
  }
function mapStateToProps(state) {
    const { auth,skills } = state
    return { userData : auth.userData,sessionToken : auth.sessionToken ,skillsData : skills.skillsData ,account_mode:auth.account_mode}
  }
export default connect(null,mapDispatchToProps)(UpdateCommentsComponent)

