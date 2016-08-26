import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div class="panel panel-primary">
                <div class="panel-body">
                    Counter status : {this.props.log}
                </div>
            </div>
        )
    }
}


export default Display;