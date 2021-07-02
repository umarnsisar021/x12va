import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

function ToolLangSkillsTile(props) {
    return (
        <span className="toolLangSkills">
            {props.title}{props.isAction === true ? <CloseIcon/> : ""}
        </span>
    )
}

export default ToolLangSkillsTile
