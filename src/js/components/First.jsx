import React from 'react';
import ReactDOM from 'react-dom';
const app = document.getElementById('app');

class App extends React.Component{
    render(){
        return (
            <h1>I <Heart/> React</h1>
        );
    }
}
const Heart = () => <span className="glyphicon glyphicon-heart"></span>

ReactDOM.render(<App/>,app);

export default App;