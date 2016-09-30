import React from 'react';
import Github from '../Github.jsx';
import ReactRouter from './ReactRouter.jsx'

const Heading6 = () => <h1>Part 6: <br/>Using the React Router</h1>
class Part6 extends React.Component{;
    render(){
        return (
            <div id="Part6" className="well">
            <Heading6/>
            <ReactRouter/>
            <Github path="Part6"/>
            </div>
        );
    }
}

export default Part6;