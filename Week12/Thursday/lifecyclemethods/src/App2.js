import React from 'react';
import ReactDOM from 'react-dom'

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {increasing: false};
        
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.val);
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 ===0;
    }

    update(){
        ReactDOM.render(<App2 val={this.props.val + 1} />, document.getElementById('root'));
    }

    render() {
        console.log(this.state.increasing); 
        return (
           <div>
               <button onClick={this.update.bind(this)}>
                    some text{this.props.val}
               </button>
           </div> 
        );
    }

    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}


App2.defaultProps = {
    val: 0
};


export default App2
