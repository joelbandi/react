import React from 'react';
import Heading1 from './Heading1.jsx';
import Textcopy from './Textcopy.jsx';
import Github from '../Github.jsx';


class Part2 extends React.Component{;
    render(){
        return (
            <div id="Part1" className="well">
                <Heading1/>
                <Textcopy text={this.props.text}/>
                <Github path="Part1"/>
            </div>
        );
    }
}

export default Part2;