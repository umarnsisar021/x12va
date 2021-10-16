import React from 'react'
import {AlertCircle, Check, Clock, X ,Edit3} from 'react-feather'
import { useHistory } from 'react-router';
import { Tooltip } from 'reactstrap';
function ToolLangSkillsTile(props) {
    return (
        <span className="toolLangSkills">
            <span style={{padding:'0px 15px 0px 0px'}}>{props.title}</span>
            <span className="icon-delete" onClick={props.onDelete} style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><X size={14}/></span>
        </span>
    )
}

export function SkillsTile(props) {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const [tooltipText, setTooltipText] = React.useState('');
    const toggle = () => setTooltipOpen(!tooltipOpen);
    let history = useHistory()
    const onGiveTest = ()=>{
        history.push("/expert/skill/test/details/"+props.id)
    }
    return (
        <span className="toolLangSkills">
            <span style={{padding:'0px 5px 0px 0px'}}>{props.status == 0 ? <AlertCircle id={`TooltipNotVerified-${props.id}`} size={14} color="#ff6d6d"/> : <Check size={14} color="#28a745"/>}</span>
            <span style={{padding:'0px 15px 0px 0px'}}>{props.title}</span>
             
            <span className="icon-delete" onClick={props.onDelete} style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><X size={14}/></span>
            { 
                props.status == 0 ?
                <span className="icon-give-test" onClick={onGiveTest} style={{paddingLeft:'5px',paddingRight:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><Edit3 size={14}/></span>
                : null
            }
            {
                props.status == 0 ? <Tooltip placement="top" isOpen={tooltipOpen} target={`TooltipNotVerified-${props.id}`} toggle={toggle}>
               Skill Not Verified
                    </Tooltip> : '' 
           }
        </span>
    )
}

export default ToolLangSkillsTile
