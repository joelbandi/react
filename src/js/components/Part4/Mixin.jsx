import React from 'react';

let Mixin = (InnerComponent) => class extends React.Component{
    constructor(){
        super();
        this.state={
            value:0
        }
        this.update=this.update.bind(this);
    }
    update(){
        this.setState({
            value:++this.state.value
        });
    }
    render(){
        return (
            <InnerComponent update={this.update}
            {...this.state}
            {...this.props}
            />
        );
    }
}




export default Mixin;