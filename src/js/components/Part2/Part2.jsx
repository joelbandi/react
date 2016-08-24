import React from 'react';
import Heading from './Heading.jsx';
import Textcopy from './Textcopy.jsx';



class Part2 extends React.Component{;
    render(){
        return (
            <div id="Part2" className="well">
                <Heading/>
                <Textcopy text={this.props.text}/>
            </div>
        );
    }
}


export default Part2;