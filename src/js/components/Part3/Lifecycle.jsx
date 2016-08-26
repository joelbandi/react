import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter.jsx'
import Display from './Display.jsx';


class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={
            countermounted:true,
            counterstate:''
        }
    }
    mount(){
        // ReactDOM.render(<Counter/>,document.getElementById('counter'));
        if(!this.state.countermounted){
            this.setState({
            countermounted:true
        });
        }
    }
    unmount(){
        // ReactDOM.unmountComponentAtNode(document.getElementById('counter'));
        if(this.state.countermounted){
            this.setState({
                countermounted:false
            });
        }
    }
    getlog(log){
        this.setState({
            counterstate:log
        });
    }
    render(){
        return (
            <div >
                <h4><em>Lifecycle: </em>WillMount -> Render -> DidMount -> WillUnmount -> DidUnmount</h4>
                <div>
                    <button onClick={this.unmount.bind(this)} className="btn btn-danger btn-lg">Unmount Counter</button>
                    &nbsp;
                    <button onClick={this.mount.bind(this)} className="btn btn-success btn-lg">Mount Counter</button>
                </div>
                <hr/>;
                <center >
                    <Display log={this.state.counterstate} />
                    <div >
                    {(() => {
                        if(this.state.countermounted){
                            return (<Counter ref='counter' context={this} trickshot={this.getlog}/>);
                        }
                    })()}
                    </div> 
                </center>
            </div>
        );
    }
}



export default Lifecycle;