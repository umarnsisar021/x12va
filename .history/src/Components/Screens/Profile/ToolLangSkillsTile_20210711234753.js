import React from 'react'
import {AlertCircle, Check, Clock, X} from 'react-feather'
import { Tooltip } from 'reactstrap';
function ToolLangSkillsTile(props) {
    return (
        <span className="toolLangSkills">
            {props.title}{props.action === true ? props.icon : ""}
        </span>
    )
}

export function SkillsTile(props) {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <span className="toolLangSkills">
            <span style={{padding:'0px 5px 0px 0px'}}>{props.status == 0 ? <AlertCircle id="TooltipNotVerified" size={14} color="#ff6d6d"/> : <Check size={14} color="#28a745"/>}</span>
            <span style={{padding:'0px 15px 0px 0px'}}>{props.title}</span>
            <span style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid #D3D3D3"}}><X size={14}/></span>
            <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipNotVerified" toggle={toggle}>
                Skill Not Verified
            </Tooltip>
        </span>
    )
}

export default ToolLangSkillsTile
