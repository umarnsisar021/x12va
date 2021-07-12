import React from 'react'


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
            <span>{props.status === 0 ? <Cross/> }</span>
        </span>
    )
}

export default ToolLangSkillsTile
