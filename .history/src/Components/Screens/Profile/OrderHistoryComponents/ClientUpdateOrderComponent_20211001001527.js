import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating'
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
function ClientUpdateOrderComponent(props) {
    const [rating, setRating] = React.useState(0) // initial rating value
    const [remarks, setRemarks] = React.useState('') // initial rating value
    
    let form =  useForm();
    const { acceptedFiles,
        getRootProps,
        getInputProps,
        open
    } = useDropzone({ accept: "image/*", noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));
    const handleRating = (rate) => {
        setRating(rate)
    }
    const handleMarkCompleted =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to mark your order as completed',
            showCancelButton: true,
            confirmButtonText: 'Yes, Sure',
            confirmButtonColor:"#066fc0",
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                useJwt.post(
                    "clients/complete_task",
                    {
                        task_id:props.data.task_detail.task_id,
                        token:props.sessionToken
                    }).then((res)=>{
                        if(res.status ==200){
                            Swal.fire(
                                'Successfully',
                                'Your order has been completed.',
                                'success'
                            )
                        }
                       
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
          })
    }
    const handleSubmitPostRemarks =()=>{
        if (result.isConfirmed) {
            useJwt.post(
                "clients/complete_task",
                {
                    task_id:props.data.task_detail.task_id,
                    token:props.sessionToken
                }).then((res)=>{
                    if(res.status ==200){
                        Swal.fire(
                            'Successfully',
                            'Your order has been completed.',
                            'success'
                        )
                    }
                    
                })
        } else if (result.dismiss === Swal.DismissReason.cancel) {

        }
    }
        
    if (props.data.client.member_id == props.userData.id) {
        if (props.data.task_detail.status == 2) {
            return null
        }
        else if(props.data.task_detail.status == 3){
            return null
        }
        else if(props.data.task_detail.status == 4){
            return <div>
                        <div className="refc__inner my-2">
                            <div className=" text-center">
                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                    <h6 className="py-2">ORDER COMPLETED</h6>
                                    <p>You marked your order as completed.</p>
                            </div>
                        </div>
                        {
                            
                            Object.keys(props.data.ratings).length > 0 ? 
                            <div className="refc__inner my-2">
                                <div className=" text-center">
                                        <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                        <h6 className="py-2">RATING</h6>
                                        <p>Please leave your rating for <strong>{props.data.expert.name}</strong>`s work.</p>
                                        <Rating  ratingValue={rating} stars={5} />                                          
                                </div>
                            </div>

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
                    
        }
        else {
            return (
                <div className="updateOrder__file">
                    <div className="tOrder__inner my-3 text-center" >
                        <h5 className=""><span className="title__blue"></span> Here you can mark your order as completed</h5>
                        <p className="f-14"></p>
                        <button onClick={()=>{handleMarkCompleted()}} className="btn-sm btn-theme-default" style={{alignSelf:'center'}}>Mark Completed</button>
                    </div>
                </div>
            )
        }
    }
    else{
        if (props.data.task_detail.status == 2) {
            return null
        }
        else if(props.data.task_detail.status == 3){
            return null
        }
        else if(props.data.task_detail.status == 4){
            return <div>
                        <div className="refc__inner my-2">
                            <div className=" text-center">
                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                    <h6 className="py-2">ORDER COMPLETED</h6>
                                    <p><strong>{props.data.client.name}</strong> marked order as completed.</p>
                                   
                                    
                            </div>
                        </div>

                        {
                            Object.keys(props.data.ratings).length > 0 ? 
                            Object.values(props.data.ratings).map(()=>{
                                return <div className="refc__inner my-2">
                                            <div className=" text-center">
                                                    <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                                                    <h6 className="py-2">ORDER RATING</h6>
                                                    <p><strong>{props.data.client.name}</strong> left ratting for your work.</p>        
                                            </div>
                                        </div>
                            }) 
                            : null
                        }
                        
                    </div>
                    
        }
    }
}

export default ClientUpdateOrderComponent
