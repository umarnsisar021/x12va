import React from 'react'
import {AlertCircle, Clock} from 'react-feather'

function ToolLangSkillsTile(props) {
    return (
        <span className="toolLangSkills">
            {props.title}{props.action === true ? props.icon : ""}
        </span>
    )
}

export function SkillsTile(props) {
    return (
        <span className="toolLangSkills">
            {props.title}
            <span style={{paddingLeft:'10px'}}>{props.status == 0 ? <AlertCircle size={14} color="#ff6d6d"/> : <Clock/>}</span>
            <span style={{float:'right' , borderLeft: "1px solid gary"}}><Clock size={14}/></span>
        </span>
    )
}

export default ToolLangSkillsTile
