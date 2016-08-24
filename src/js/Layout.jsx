import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro/Intro.jsx';
import Part1 from './components/Part1/Part1.jsx';
import Part2 from './components/Part2/Part2.jsx';




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
                    <Part1 text="This text came from a prop"/>
                    <Part2/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
export default Layout;