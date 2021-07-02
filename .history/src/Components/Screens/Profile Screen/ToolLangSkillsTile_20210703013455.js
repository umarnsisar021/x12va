import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

function ToolLangSkillsTile({title}) {
    return (
        <span className="toolLangSkills">
            {title}<CloseIcon/>
        </span>
    )
}

export default ToolLangSkillsTile
