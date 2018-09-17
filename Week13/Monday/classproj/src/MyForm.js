import React from 'react';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: '',
            color: 'blue'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update_color = this.update_color.bind(this);
    }

    
    handleChange(e){
        
        this.setState({value: e.target.value});
        
    }

    handleSubmit(e){
        alert('form submitted');
        e.preventDefault();
    }

    
    update_color(e){

        
        this.setState({color: e.target.value,
            name: e.target.name
        });
        
        
    }
    

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                {this.state.value}<br />
                {this.state.color}
                <select value={this.state.color}
                    onChange={this.update_color}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select><br />
               <input type="text" value={this.state.value} onChange={this.handleChange}/>
               <input type="submit"/>
           </form> 
        );
    }
}




export default MyForm
