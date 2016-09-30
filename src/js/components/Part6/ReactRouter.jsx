import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Link} from 'react-router';
import Pane1 from './Pane1.jsx';
import Pane2 from './Pane2.jsx';
import Nav from './Nav.jsx';


class ReactRouter extends React.Component{
    render(){
        return (
            <div>
            <Router history={hashHistory}>
                <Route path = "/" component={Nav}>
                <IndexRoute component={Pane1}></IndexRoute>
                <Route path='pane1' component={Pane1}></Route>
                <Route path='pane2' component={Pane2}></Route>
                </Route>
                
            </Router> 
            </div>     
        )
    }
}


export default ReactRouter;