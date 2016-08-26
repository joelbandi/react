import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        }
    }
    update() {
        this.setState({
            value: ++this.state.value
        });
    }

    componentWillMount() {
        this.setState({
            state: 'Counter component did mount!!'
        });
        this.props.trickshot.call(this.props.context,this.state.state);
    }

    componentDidMount() {
        this.setState({
            state: 'Counter component is did unmount!!'
        });
        this.props.trickshot.call(this.props.context,this.state.state);
    }

    componentWillUnmount() {
        this.setState({
            state: 'Counter component will unmount!!'
        });
        this.props.trickshot.call(this.props.context,this.state.state);
    }
    
    render() {
        return (
            <div>
                <br/>
                <button onClick={this.update.bind(this) } className='btn btn-primary btn-block'>You clicked me <span class="badge">{this.state.value}</span> times</button>
                <br/>
            </div>
        );
    }
}



export default Counter;

