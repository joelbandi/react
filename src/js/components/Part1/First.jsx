import React from 'react';

const Heart = () => <span className="glyphicon glyphicon-heart"></span>
class First extends React.Component{
    render(){
        return (
            <h1>I <Heart/> React.
            <br/>An introduction to React Ecosystem.<hr/></h1>
            
        );
    }
}

export default First;