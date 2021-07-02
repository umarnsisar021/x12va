import React from 'react'
import './ProjectTab.css'
import ProjectTable from './ProjectTable'

function ProjectTab() {
    return (
        <div className="project__tab">
            <h3>Projects</h3>
            <div className="projectTab__table">
                <ProjectTable/>
            </div>
        </div>
    )
}

export default ProjectTab
