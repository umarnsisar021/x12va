import React, { useEffect, useState } from 'react'
import useJwt from '@utils'
import { toast } from 'react-toastify'
const UpdateCommentsComponent = (props)=>{
    const [comments,setComments] = useState(props.comments) 
    const [inputText,setInputText] = useState('')
    const handleSubmitUpdateComment =()=>{
        if(inputText.length >= 4){

            useJwt.post("/tasks/task_update_comment_add",{token:"",update_id:props.id,comment:inputText}).then(()=>{

            })
            let c = comments;
            c.push({comment:inputText,member_id:props.userData.id})
            setComments(c);
            setInputText("")
        }
       
    }
    useEffect(()=>{

    },[])
    return  <div>
        {
            comments.map((comment,c_index)=>{
                if(comment.member_id == props.userData.id){
                    return <div className="p-2" key={c_index} style={{borderBottom:"1px solid lightgray"}}>
                    <p className="m-0 f-12" style={{fontWeight:500,color:"black"}}>{props.expert.name}</p>
                    <p className="m-0 f-12">{comment.comment}</p>
                </div>
                }
                else{
                    return <div className="p-2" key={c_index} style={{borderBottom:"1px solid lightgray"}}>
                                <p className="m-0 f-12" style={{fontWeight:500,color:"black"}}>{props.client.name}</p>
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

export default UpdateCommentsComponent