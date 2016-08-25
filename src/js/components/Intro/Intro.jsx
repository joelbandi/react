import React from 'react';
import First from './First.jsx';
import Button from './Button.jsx';

import '../../../assets/styles.css';
class Part1 extends React.Component {


    render() {
        return (
                <div className="jumbotron">
                    <First />
                    <Button/>
                </div>
        );
    }

}
export default Part1;