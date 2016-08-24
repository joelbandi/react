import React from 'react';
import Heading1 from './Heading1.jsx';
import Textcopy from './Textcopy.jsx';



class Part2 extends React.Component{;
    render(){
        return (
            <div id="Part1" className="well">
                <Heading1/>
                <Textcopy text={this.props.text}/>
            </div>
        );
    }
}


export default Part2;