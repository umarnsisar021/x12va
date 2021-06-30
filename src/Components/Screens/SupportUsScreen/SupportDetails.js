import React from 'react'
import './SupportDetails.css'
import vector from '../../../Assets/Images/Support Vector.png'

function SupportDetails() {
    return (
        <div className="sp__detailsBox">
            <div className="spu__vector">
                <img src={vector} alt="" />
            </div>
            <div className="spu__details">
                <h1>Support Us</h1>
                <p>
                    Before you even start thinking, lets ask ourselves, 
                    why? And what good is it bringing to make this world 
                    a better place.
                </p>
                <p>
                    X12v is a place specially designed where nothing is 
                    ever wrong. It is verified by hundreds of specialists. 
                    We have given a lot of time, energy and effort to this. 
                    We made it a better platform than others. A platform 
                    of the people. Everything needs support to be even better. 
                    Yes, we as platform are always striving to make this 
                    platform a better. Here you will see less people but 
                    they are more motivated, focused and ready to serve 
                    hundreds of people around the globe.
                </p>
                <button className="buttonType__one mt-2">Support Us</button>
            </div>
        </div>
    )
}

export default SupportDetails
