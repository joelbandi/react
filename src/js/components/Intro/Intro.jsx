import React from 'react';
import First from './First.jsx';
import Button from './Button.jsx';

class Part1 extends React.Component {

    

    constructor(){
        super();
        this.divStyle = {
            backgroundImage: 'url(../assets/cube.jpg)',
            color: 'white'
        };
    }

    render() {
        return (
                <div className="jumbotron" style={this.divStyle}>
                    <First />
                    <Button/>
                </div>
        );
    }
}
export default Part1;