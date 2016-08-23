import React from 'react';
import ReactDOM from 'react-dom';
const app = document.getElementById('app');

class App extends React.Component{
    render(){
        return (
            <h1>Reactific</h1>
        );
    }
}

ReactDOM.render(<App/>,app);

export default App;