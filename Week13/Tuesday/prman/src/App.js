import React from 'react';
import PropTypes from 'prop-types';
import AddProject from './components/AddProject';
import Project from './components/Project';
import uuid from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {projects:[] }
    
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Foogle",
          category: "Front-End"
        },
        {
          id: uuid.v4(),
          title: "Merkuri",
          category: 'Full-Stack'
        },
        {
          id: uuid.v4(),
          title: 'Project Management',
          category: 'React-Redux'
        }
      ]
    })
  }

  handleAddProject(sentProject){
    // console.log("we're in the main app: " + project.title);

    let newProject = this.state.projects;
    newProject.push(sentProject);

    this.setState({projects: newProject});

  }

  handleDeleteProject(id){
    // console.log("delete id inside of app" + id);

    let project = this.state.projects;
    let index = project.findIndex(x => x.id === id);

    project.splice(index, 1);

    this.setState({projects: project})
  }
  render() {
    return (
      <div>
        <Project onDeleteProject={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
        <AddProject addProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}


App.propTypes = {
  
};

export default App
