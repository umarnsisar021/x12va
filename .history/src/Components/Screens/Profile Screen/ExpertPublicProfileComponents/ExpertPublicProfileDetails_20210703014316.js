import React from 'react'
import ToolLangSkillsTile from '../ToolLangSkillsTile'
import './ExpertPublicProfileDetails.css'
import TabsComp from './TabsComp'
import CloseIcon from '@material-ui/icons/Close'
function ExpertPublicProfileDetails(props) {
    return (
        <div className="eppd__details">
            <h3>About Us</h3>
            <hr />
            <p>
                Vestibulum vel consectetur erat. Nam pulvinar commodo aliquam.
                Integer ac sem vulputate hendrerit elit sit amet, imperdiet nibh.
                Nam vitae volutpat sem. Donec porttitor dui, tempor tortor
                ultricies vitae. Vestibulum ultrici molestie dui, id laoreet mi.
                Nulla ultrices mattis arcu, non ullamcorper odio tempus ut.
                Mauris fermentum.
            </p>
            <h3>Tested Skills:</h3>
            <hr />
            <div className="tested__skills">
                {
                    Object.values(props.data.skills).length > 0 ? 
                    <ToolLangSkillsTile
                    //action={true}
                    //icon={<CloseIcon onClick={()=>{alert()}} />}
                    title="vehicula risus vel turpis"
                    /> : ""
                }
                <ToolLangSkillsTile
                    //action={true}
                    //icon={<CloseIcon onClick={()=>{alert()}} />}
                    title="vehicula risus vel turpis"
                />
                <ToolLangSkillsTile
                    title="Praesent vehicula"
                />
                <ToolLangSkillsTile
                    title="Commodo"
                />            <ToolLangSkillsTile
                    title="vehicula risus vel turpis"
                />
                <ToolLangSkillsTile
                    title="Praesent vehicula"
                />
                <ToolLangSkillsTile
                    title="Commodo"
                />
            </div>
            <TabsComp/>
        </div>
    )
}

export default ExpertPublicProfileDetails
