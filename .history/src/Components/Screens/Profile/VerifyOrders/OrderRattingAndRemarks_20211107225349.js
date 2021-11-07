import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { toast } from 'react-toastify';
function OrderRattingAndRemarks(props) {
    const [rating, setRating] = React.useState(0) // initial rating value
    const [remarks, setRemarks] = React.useState('') // initial rating value

    const handleRating = (rate) => {
        setRating(rate)
    }
   
    const handleSubmitPostRemarks =()=>{
        if (rating > 0) {
            if (remarks.length > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'You want to accept to verify',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Sure',
                    confirmButtonColor:"#066fc0",
                    cancelButtonText: 'Cancel'
                    }).then((result) => {
                 
                    if (result.isConfirmed) {
                        props.showFadeLoader('Submitting Request...');
                        useJwt.post('tasks/accept_verification_request',{task_id:id,token:props.sessionToken})
                        .then((res)=>{
                            props.hideFadeLoader('')
                            if(res){
                                let timerTimeout
                                Swal.fire({
                                    title: 'Accepted!',
                                    text: 'Redirecting to task review',
                                    showCancelButton: false,
                                    didOpen: () => {
                                        Swal.showLoading()
                                        const b = Swal.getHtmlContainer().querySelector('b')
                                        timerTimeout = setTimeout(() => {
                                            
                                        }, 3000) 
                                    },
                                    willClose: () => {
                                        //clearInterval(timerInterval)
                                    }
                                })
                            }
                        }).catch((error)=>{
                            if(error.response){
                                Swal.fire(
                                    'Failed',
                                    error.response.data.message,
                                    'warning'
                                )
                            }
                            props.hideFadeLoader('')
                        })
                        
                    } else if (result.isDenied) {
                    
                    }
                })
                // props.showFadeLoader("")
                // useJwt.post(
                //     "tasks/verifier_update_rating",
                //     {
                //         task_id:props.data.task_detail.task_id,
                //         rate:rating,
                //         remarks:remarks,
                //         token:props.sessionToken,
                //     }).then((res)=>{
                //         if(res.status){
                //             props.hideFadeLoader("")
                //             Swal.fire(
                //                 'Successfully',
                //                 'You ratting has been posted.',
                //                 'success'
                //             )
                //         }
                //         props.callback();
                // }).catch(()=>{
                //     props.hideFadeLoader("")
                // })
            }else{
                toast.error("Please fill the remarks field.")
            }
           
        } else {
            toast.error("Please select ratting.")
        }
    }
        
    /// For Verifier
   
        
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
                                                <input className="p-0" style={{width:'40px',border:'none',}} placeholder="0" type="number"  id="ratting-input" onKeyUp={(elem)=>{
                                                        if(elem.target.value.length == 0){
                                                            elem.target.style.width =  1  + 'ch'
                                                        }
                                                        else{
                                                            elem.target.style.width =  elem.target.value.length  + 'ch'
                                                        }
                                                      
                                                        
                                                    }} minLength={0} maxLength="10"  onChange={(text)=>setRating(text.target.value)} />
                                            </div>
                                            <div className="">
                                                / 10
                                            </div>
                                        </div>
                                    </div>

                                    <textarea rows="2" placeholder="Remarks" onChange={(text)=>setRemarks(text.target.value)}>
                                        {remarks}
                                    </textarea>
                                    <button className="btn-theme-default mt-2" style={{alignSelf:'center'}} onClick={()=>handleSubmitPostRemarks()}>Post Ratting</button>                                
                            </div>
                        }
                        
                    </div>
             </div>
    
  
}

export default OrderRattingAndRemarks
