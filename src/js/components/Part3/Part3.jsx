import React from 'react';
import Counter from './Counter.jsx';
import Lifecycle from './Lifecycle.jsx';
import Github from '../Github.jsx';

const Heading3 = () => <h1>Part 3: <br/> Component lifecycles and mounting</h1>
class Part3 extends React.Component{;
    render(){
        return (
            <div id="Part3" className="well">
                <Heading3/>
                <Lifecycle/>
                <Github path="Part3"/>
            </div>
        );
    }
}

export default Part3;