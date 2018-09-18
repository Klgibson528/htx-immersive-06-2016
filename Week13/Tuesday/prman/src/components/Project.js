import React from 'react';

import ProjectItem from './ProjectItem';

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    }

    onDeleteProject(id){
        // console.log("delete id inside of project" + id)

        this.props.onDeleteProject(id);
    }
    render() {
        let projectItems;


        projectItems = this.props.projects.map(project => {
            return <ProjectItem onDelete={this.onDeleteProject.bind(this)} key={project.id} project={project} />
        })

        return (
            <div>
                {projectItems}
            </div>
        );
    }
}




export default Project
