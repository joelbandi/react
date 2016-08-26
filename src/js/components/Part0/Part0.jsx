import React from 'react';
import Heading0 from './Heading0.jsx';
import FirstComponent from './FirstComponent.jsx'
import Github from '../Github.jsx';


class Part0 extends React.Component{
    render(){
        return (
            <div id="Part0" className="well">
                <Heading0/>
                <FirstComponent>This is the first component</FirstComponent>
                <Github path="Part0"/>
            </div>
        );
    }
}

export default Part0;