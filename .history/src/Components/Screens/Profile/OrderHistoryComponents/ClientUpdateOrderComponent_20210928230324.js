import React from 'react'
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
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
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Sure',
            confirmButtonColor:"#066fc0",
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                useJwt.post("clients/complete_task")
              Swal.fire(
                'Successfully',
                'Your order has been completed.',
                'success'
              )
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
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
        if (props.data.status !== 2 || props.data.status !== 3 || props.data.status !== 4) {
            return (
                <div className="updateOrder__file">
                
                    <div className="tOrder__inner my-3 text-center" >
                        <h5 className=""><span className="title__blue"></span> Here you can mark your order as completed</h5>
                        <p className="f-14">Here Your work will be uploaded as some parts of it get completed.</p>
                        <button onClick={()=>{handleMarkCompleted()}} className="btn-theme-default" style={{alignSelf:'center'}}>Mark Completed</button>
                    </div>
                </div>
            )
        }
        else{
            return null
        }
    }
    else{
        return null
    }
}

export default ClientUpdateOrderComponent
