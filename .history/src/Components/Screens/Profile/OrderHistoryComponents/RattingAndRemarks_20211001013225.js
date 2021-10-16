import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { toast } from 'react-toastify';
function RattingAndRemarks(props) {
    const [rating, setRating] = React.useState(0) // initial rating value
    const [remarks, setRemarks] = React.useState('') // initial rating value
    
    
    const handleRating = (rate) => {
        setRating(rate)
    }
   
    const handleSubmitPostRemarks =()=>{
        if (rating > 0) {
            if (remarks.length > 0) {
                props.showFadeLoader("")
                useJwt.post(
                    "tasks/add_task_rating",
                    {
                        task_id:props.data.task_detail.task_id,
                        rate:rating,
                        remarks:remarks,
                        token:props.sessionToken,
                    }).then((res)=>{
                        if(res.status){
                            props.hideFadeLoader("")
                            Swal.fire(
                                'Successfully',
                                'You ratting has been posted.',
                                'success'
                            )
                        }
                        props.callback();
                }).catch(()=>{
                    props.hideFadeLoader("")
                })
            }else{
                toast.error("Please fill the remarks field.")
            }
           
        } else {
            toast.error("Please select ratting.")
        }
    }
        
    /// For Client
    if (props.data.client.member_id == props.userData.id) {
        if(props.data.task_detail.status == 4){
            return <div>
                        <div className="refc__inner my-2">
                            <div className=" text-center">
                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                    <h6 className="py-2">RATING & REMARKS</h6>
                            </div>
                        {
                            
                            Object.keys(props.data.ratings).length > 0 ?
                            Object.values(props.data.ratings).map((row)=>{
                                if(row.from_member_id == props.userData.id){
                                    return <div className=" text-center">
                                                <p>Your ratting to <strong>{props.data.expert.name}</strong>.</p>
                                                <Rating ratingValue={row.rate} stars={5} />
                                                <textarea rows="2" placeholder="Remarks" disabled>
                                                    {row.remarks}
                                                </textarea>                                        
                                            </div>
    
                                }
                                else{
                                    return <div className=" text-center">
                                                <p><strong>{props.data.expert.name}</strong> ratted you.</p>
                                                <Rating ratingValue={row.rate} stars={5} />
                                                <textarea rows="2" placeholder="Remarks" disabled>
                                                    {row.remarks}
                                                </textarea>                                        
                                            </div>
                                }
                            })
                            : 
                            <div className="refc__inner my-2">
                                <div className=" text-center">
                                        <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                        <h6 className="py-2">RATING & REMARKS</h6>
                                        <p>Please leave your rating for <strong>{props.data.expert.name}</strong>`s work.</p>
                                        <Rating onClick={handleRating}  ratingValue={rating} stars={5} />
                                        <textarea rows="2" placeholder="Remarks" onChange={(text)=>setRemarks(text.target.value)}>
                                            {remarks}
                                        </textarea>
                                        <button className="btn-theme-default" style={{alignSelf:'center'}} onClick={()=>handleSubmitPostRemarks()}>Post Remarks</button>                                
                                </div>
                            </div>
                        }
                    </div>
                </div>
                    
        }
        else {
            return null
        }
    }
    /// For Expert
    else{
        if(props.data.task_detail.status == 4){
            let rated = Object.values(props.data.ratings).map((row)=> { 
                let r= 0;
                 if(props.data.expert.member_id === row.from_member_id){
                     r=1;
                 }
                 return r;
            })
            return <div>
                        {rated}
                        <div className="refc__inner my-2">
                            <div className=" text-center">
                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                    <h6 className="py-2">RATING & REMARKS</h6>
                            </div>
                        {
                            
                            Object.keys(props.data.ratings).length > 0 ?
                            Object.values(props.data.ratings).map((row)=>{
                                
                                if(row.from_member_id == props.userData.id){
                                    return <div className=" text-center mt-3">
                                                <p>Your ratting to <strong>{props.data.client.name}</strong>.</p>
                                                <Rating ratingValue={row.rate} stars={5} />
                                                <textarea rows="2" placeholder="Remarks" disabled>
                                                    {row.remarks}
                                                </textarea>                                        
                                            </div>
                                }
                                else{
                                    return <div className=" text-center mt-3">
                                                <p><strong>{props.data.client.name}</strong> ratted you.</p>
                                                <Rating ratingValue={row.rate} stars={5} />
                                                <textarea rows="2" placeholder="Remarks" disabled>
                                                    {row.remarks}
                                                </textarea>                                        
                                            </div>
                                }
                            })
                            : 
                            
                            <div className="text-center mt-3">
                                    <p>Please leave your rating for <strong>{props.data.client.name}</strong>.</p>
                                    <Rating onClick={handleRating}  ratingValue={rating} stars={5} />
                                    <textarea rows="2" placeholder="Remarks" onChange={(text)=>setRemarks(text.target.value)}>
                                        {remarks}
                                    </textarea>
                                    <button className="btn-theme-default" style={{alignSelf:'center'}} onClick={()=>handleSubmitPostRemarks()}>Post Remarks</button>                                
                            </div>
                        }

                        {/*  */}

                        {
                            rated == true ? null : 
                            <div className=" text-center mt-3">
                                
                                    <p>Please leave your rating for <strong>{props.data.client.name}</strong>.</p>
                                    <Rating onClick={handleRating}  ratingValue={rating} stars={5} />
                                    <textarea rows="2" placeholder="Remarks" onChange={(text)=>setRemarks(text.target.value)}>
                                        {remarks}
                                    </textarea>
                                    <button className="btn-theme-default" style={{alignSelf:'center'}} onClick={()=>handleSubmitPostRemarks()}>Post Remarks</button>                                
                            </div>
                        }
                      
                    </div>
                </div>
        }
        else{
            return null
        }
    }
}

export default RattingAndRemarks
