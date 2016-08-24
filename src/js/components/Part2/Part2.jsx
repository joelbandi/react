import React from 'react';
import Heading2 from './Heading2.jsx';
import Slider from './Slider.jsx';
import ReactDOM from 'react-dom';
class Part2 extends React.Component{
    constructor(){
        super();
        this.state={
            red:0,
            green:0,
            blue:0
        }
    }
    update(event){
        this.setState({
            red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        });
        console.log(ReactDOM.findDOMNode(this.refs.red.refs.inp));
    }
    render(){
        return (
            <div id="Part2" className="well">
                <Heading2/>
                <h4>Red({this.state.red}), Green({this.state.green}) and Blue({this.state.blue})</h4>
                <hr/>
                <Slider ref="red" update={this.update.bind(this)}/>
                <Slider ref="green" update={this.update.bind(this)}/>
                <Slider ref="blue" update={this.update.bind(this)}/>
            </div>   
        )
    }
};

export default Part2;