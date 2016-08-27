import React from 'react';
import Github from '../Github.jsx';
import PokeTable from './PokeTable.jsx';

const Heading5 = () => <h1>Part 5: <br/> Dynamically generating components</h1>
class Part5 extends React.Component{;
    render(){
        return (
            <div id="Part5" className="well">
            <Heading5/>
                <PokeTable/>
                <Github path="Part5"/>
            </div>
        );
    }
}

export default Part5;