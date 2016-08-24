import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './components/Part1/Part1.jsx';
import Part2 from './components/Part2/Part2.jsx';



class Layout extends React.Component{
    render(){
        return (
            <div>
            <Part1/>
            <br/>
            <Part2 text="This text came from a prop"/>
            </div>
            
        );
    }
}

ReactDOM.render(<Layout/>, document.getElementById('app'));
export default Layout;