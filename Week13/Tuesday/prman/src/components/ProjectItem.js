import React from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleDelete(id){
        
        this.props.onDelete(id);
    }

    render() {
        return (
           <div>
               <strong>{this.props.project.category}:</strong> {this.props.project.title}
               <a href="#" onClick={this.handleDelete.bind(this, this.props.project.id)}>X</a>
           </div> 
        );
    }
}




export default ProjectItem
