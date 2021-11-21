import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
import { toast } from 'react-toastify';
import default_profile from '@images/default-profile.png';
const get_color =(num)=>{
    if (num < 3) {
        return '#ff0000'
    }
    if (num < 7) {
        return '#ffa500'
    }
    if(num > 7){
        return '#026e1b'
    }
}
function VerifierRatingAndRemarks(props) {
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

    let rated = false
  
    return  Object.values(props.data.task_updates_verification_history).map((row)=>{
        return <div>
                    <div className="refc__inner my-2 mb-4">
                        <div className=" text-center">
                                <img className="py-2" src={row.avatar ? row.avatar : default_profile} style={{height:'80px',borderRadius:'50%'}} />
                                <h6 className="py-2 m-0">{row.first_name} {row.last_name} Ratted your work.</h6>
                        </div>
                
                
                        <div className=" text-center mt-3">
                        
                                {/* <Rating onClick={handleRating}  ratingValue={rating} stars={5} /> */}
                
                                <div>
                                    <div  className="d-flex align-items-center justify-content-center mt-0 mb-0" style={{fontSize:'40px'}} >
                                        <div className="">
                                            <span style={{color:get_color(props.data.task_updates_verification_history[0].rating)}}>{props.data.task_updates_verification_history[0].rating}</span> / 10
                                        </div>
                                    </div>
                                </div>
                
                                <div className="text-left">
                                    <p><strong>Remarks</strong>: {props.data.task_updates_verification_history[0].note}</p>
                                </div>
                    
                        </div>
                    </div>
                </div>
    }) 
        
           
    
  
}

export default VerifierRatingAndRemarks
