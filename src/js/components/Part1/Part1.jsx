import React from 'react';
import First from './First.jsx';
import Button from './Button.jsx';

class Part1 extends React.Component {
    render() {
        return (
                <div className="well">
                    <First />
                    <Button/>
                </div>
        );
    }
}
export default Part1;