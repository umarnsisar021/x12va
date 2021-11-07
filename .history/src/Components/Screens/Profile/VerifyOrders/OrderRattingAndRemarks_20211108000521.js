import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { toast } from 'react-toastify';
import { data } from 'jquery';

const get_color =(num)=>{
    if (num < 3) {
        return '#ff0000'
    }
    else if (num > 3) {
        return '#ffa500'
    }
}
function OrderRattingAndRemarks(props) {
    const [rating, setRating] = React.useState(0) // initial rating value
    const [remarks, setRemarks] = React.useState('') // initial rating value
   
    const handleSubmitPostRemarks =()=>{
        if (rating > 0) {
            if (remarks.length > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'You want to submit?',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Sure',
                    confirmButtonColor:"#066fc0",
                    cancelButtonText: 'Cancel'
                    }).then((result) => {
                 
                    if (result.isConfirmed) {
                        props.showFadeLoader("")
                        useJwt.post(
                            "tasks/verifier_update_rating",
                            {
                                update_id :props.data.updates[0].id,
                                rating:rating,
                                note:remarks,
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
                        }).catch((error)=>{
                            props.hideFadeLoader("")
                            toast.error(error.response.data.message)
                        })
                    } else if (result.isDenied) {
                    
                    }
                })
                
            }else{
                document.getElementById("remarks-input").focus()
                toast.error("Please fill the remarks field.")
            }
           
        } else {
            document.getElementById("ratting-input").focus()
            toast.error("Please select ratting.")
        }
    }
        
    /// For Verifier

        if(data.is_verified_by_me == 0){
            let rated = false
            Object.values(props.data.ratings).map((row)=> { 
                 if(props.data.client.member_id === row.from_member_id){
                    rated = true;
                 }
            })
            return <div>
                        <div className="refc__inner my-2">
                            <div className=" text-center">
                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                    <h6 className="py-2">RATING & REMARKS</h6>
                            </div>
                        {
                            rated == true ? null : 
                            <div className=" text-center mt-3">
                                
                                    <p>Please leave your rating for <strong>{props.data.expert.name}</strong>.</p>
                                    {/* <Rating onClick={handleRating}  ratingValue={rating} stars={5} /> */}

                                    <div>
                                        <div  className="d-flex align-items-center justify-content-center mt-3 mb-3" style={{fontSize:'60px'}} >
                                            <div> 
                                                <input minLength={0} maxLength={10} className="p-0" style={{width:'40px',border:'none',}} placeholder="0" type="number"  id="ratting-input" onKeyUp={(elem)=>{
                                                        if(elem.target.value.length == 0){
                                                            elem.target.style.width =  1  + 'ch'
                                                        }
                                                        else if(elem.target.value > 10 ){
                                                            elem.target.value =  10
                                                            elem.target.style.width =  elem.target.value.length  + 'ch'
                                                        }
                                                        else{
                                                            elem.target.style.width =  elem.target.value.length  + 'ch'
                                                        }
                                                      
                                                        
                                                    }}  onChange={(text)=>setRating(text.target.value)} />
                                            </div>
                                            <div className="">
                                                / 10
                                            </div>
                                        </div>
                                    </div>

                                    <textarea id="remarks-input" rows="2" placeholder="Remarks" onChange={(text)=>setRemarks(text.target.value)}>
                                        {remarks}
                                    </textarea>
                                    <button className="btn-theme-default mt-2" style={{alignSelf:'center'}} onClick={()=>handleSubmitPostRemarks()}>Post Ratting</button>                                
                            </div>
                        }
                        
                    </div>
             </div>
        }
        else{
            let rated = false
            Object.values(props.data.ratings).map((row)=> { 
                 if(props.data.client.member_id === row.from_member_id){
                    rated = true;
                 }
            })
            return <div>
            <div className="refc__inner my-2">
                <div className=" text-center">
                        <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                        <h6 className="py-2">YOU RATING & REMARKS</h6>
                </div>
            {
                rated == true ? null : 
                <div className=" text-center mt-3">
                
                        {/* <Rating onClick={handleRating}  ratingValue={rating} stars={5} /> */}

                        <div>
                            <div  className="d-flex align-items-center justify-content-center mt-3 mb-3" style={{fontSize:'60px'}} >
                                <div className="">
                                    {props.data.task_updates_verification_history[0].rating} / 10
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <strong>Remarks</strong>: {props.data.task_updates_verification_history[0].note} 
                        </div>
            
                </div>
            }
            
        </div>
 </div>
        }
           
    
  
}

export default OrderRattingAndRemarks
