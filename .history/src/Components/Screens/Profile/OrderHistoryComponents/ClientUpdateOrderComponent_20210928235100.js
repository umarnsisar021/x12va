import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import useJwt from '@utils'
import CongAvatar from '../../../../Assets/Images/congratsIcon.png'
function ClientUpdateOrderComponent(props) {
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
                        Swal.fire(
                            'Successfully',
                            'Your order has been completed.',
                            'success'
                          )
                    })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            //   Swal.fire(
            //     'Cancelled',
            //     'Your imaginary file is safe :)',
            //     'error'
            //   )
            }
          })
    }
        
    if (props.data.client.member_id == props.userData.id) {
        if (props.data.task_detail.status == 2) {
            return null
        }
        else if(props.data.task_detail.status == 3){
            return null
        }
        else if(props.data.task_detail.status == 4){
            return <div className="refc__inner my-2">
                       <div className=" text-center">
                            <img className="py-2" src={CongAvatar} style={{height:'60px'}} />
                            <h6 className="py-2">ORDER COMPLETED</h6>
                            <p></p>
                        </div>
                    </div>
        }
        else {
            return (
                <div className="updateOrder__file">
                    <div className="tOrder__inner my-3 text-center" >
                        <h5 className=""><span className="title__blue"></span> Here you can mark your order as completed</h5>
                        <p className="f-14">Here Your work will be uploaded as some parts of it get completed.</p>
                        <button onClick={()=>{handleMarkCompleted()}} className="btn-sm btn-theme-default" style={{alignSelf:'center'}}>Mark Completed</button>
                    </div>
                </div>
            )
        }
    }
    else{
        return null
    }
}

export default ClientUpdateOrderComponent
