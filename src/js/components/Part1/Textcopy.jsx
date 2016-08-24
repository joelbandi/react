import React from 'react';

class Textcopy extends React.Component{;
    constructor(){
        super();
        this.state={
            name:'',
            update:(event) =>{
                this.setState({
                    name:event.target.value
                });
            }
        }
    }
    render(){
        return (
            <div class="form-group">
                <h4>{this.props.text}</h4>
                <input onChange={this.state.update} class="form-control" type="text" placeholder="Type your name here to manipulate the state"/>
                <h3>Welcome to React {this.state.name}.</h3>
            </div>
        )
    }
}


export default Textcopy;