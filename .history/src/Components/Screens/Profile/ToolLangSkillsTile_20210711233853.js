import React from 'react'
import {AlertCircle, Clock} from 'react-feather'
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
            {props.title}
            <span style={{padding:' 0px 10px'}}>{props.status == 0 ? <AlertCircle id="TooltipExample" size={14} color="#ff6d6d"/> : <Clock/>}</span>
            <span style={{paddingLeft:'5px',float:'right' , borderLeft: "1px solid gray"}}><Clock size={14}/></span>
            <Tooltip placement="top" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                Hello world!
            </Tooltip>
        </span>
    )
}

export default ToolLangSkillsTile
