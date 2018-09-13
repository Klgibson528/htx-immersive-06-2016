import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    
    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }

    componentDidMount() {
        setInterval(()=> this.getTimeUntil(this.props.deadline), 500);
    }


    getTimeUntil(deadline){

        let time = Date.parse(deadline) - Date.parse(new Date());

        console.log(time);

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60)% 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        console.log(`seconds ${seconds} minutes ${minutes} hours ${hours} days ${days} `);

        this.setState({days, hours, minutes, seconds});
    }

    render() {
        return (
            <div>
                <h1>
                {this.state.days}

                {this.state.hours}

                {this.state.minutes}

                {this.state.seconds}

                </h1>
            </div>
        );
    }
}




export default Clock
