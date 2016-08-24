import React from 'react';

const Heart = () => <span className="glyphicon glyphicon-heart"></span>
class First extends React.Component{
    render(){
        return (
            <center>
            <h1>I <Heart/> React.
            <br/>An introduction to React<br/><br/></h1>
            </center>
            
        );
    }
}

export default First;