import React, { useEffect } from 'react'
import './Home.css'

import Navbar from '../../Navbar'

// All components of Home screen 
import Banner from './Banner'
import CategoriesSection from './CategoriesSection'  
import PlatformVerifiers from './PlatformVerifiers'
import ExploreMarket from './ExploreMarket'
import ServicesSearchBar from './ServicesSearchBar'
import WorkForUs from './WorkForUs'
import OpportunitySection from './OpportunitySection'
import TopExpertSec from './TopExpertSec'
import useJwt from '../../Util'
import { useHistory, useParams } from 'react-router'
import $ from 'jquery'

function Home() {
    const {action} = useParams();
    let history = useHistory();
    // useJwt.post('pages/get_fields',{id: 1}).then(async response => {

    // })

    useEffect(()=>{
        if (action == 'login') {
            if($('#login-modal').length > 0){
                setTimeout(()=>{
                    document.querySelector("#login-modal").click()
              },500)
            }
            else{
                history.push('/')
            }
        }
    },[])
    return (
        <div>
            <section className="banner">
                <Navbar/>
                <Banner/>
            </section>
            <CategoriesSection/>
            <PlatformVerifiers/>
            <ExploreMarket/>
            <ServicesSearchBar/>
            <WorkForUs/>
            <OpportunitySection/>
            <TopExpertSec/>
        </div>
    )
}

export default Home
