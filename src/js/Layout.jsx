import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro/Intro.jsx';
import Part0 from './components/Part0/Part0.jsx';
import Part1 from './components/Part1/Part1.jsx';
import Part2 from './components/Part2/Part2.jsx';
import Part3 from './components/Part3/Part3.jsx';





class Layout extends React.Component{
    constructor(){
        super();
        this.divStyles={
           maxWidth:'1500px',
           margin:'auto'
        }
    }
    render(){
        return (
            <div>
                <Intro/>
                <br/>
                <div style={this.divStyles}>
                    <Part0/>
                    <Part1 text="This text came from a prop"/>
                    <Part2/>
                    <Part3/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
export default Layout;