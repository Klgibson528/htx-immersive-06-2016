import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newProject: {}
        }
        
    }

    static defaultProps = {
        categories: ['Front-End', 'Full-Stack', 'React-Redux']
    }

    handleSubmit(e){
        
        if(this.refs.title.value === ''){
            alert('input field cannot be empty');
        }
        else{
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function(){

                //console.log("state updated: " + this.state.newProject.title + " " + this.state.newProject.category);

                ///addProject is a function
                this.props.addProject(this.state.newProject);
            })
        }
        e.preventDefault();

    }

    render() {

        let categoryOptions;

        categoryOptions = this.props.categories.map(category => {

            return <option key={category} value={category}>{category} </option>
        })

        return (
           <div>
               <h3>Add Project</h3>

               <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Title</label>
                    <input type="text" ref="title"/>
                </div>

                <div>
                <label>Category</label>
                <select ref="category">
                    {categoryOptions}
                    
                </select>
                </div>
                   
                   <input type="submit" value="submit"/>
               </form>
           </div> 
        );
    }
}




export default AddProject
