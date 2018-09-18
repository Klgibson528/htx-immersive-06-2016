import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          id: uuid.v4(),
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          id: uuid.v4(),
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]

    })
  }
  
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);

    this.setState({project: projects});

  }

  handleDeleteProject(id){
   
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({project: projects}); 
  }

  render() {
    return (
      <div >
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <AddProject addProject={this.handleAddProject.bind(this)} />
      </div>
    );
  }
}

export default App;
