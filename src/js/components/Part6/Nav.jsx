import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component{
    render(){
        return (
            <div>
            <br/>
            <Link className='btn btn-success' to="pane1">Pane1</Link>
            <Link className='btn btn-danger' to="pane2">Pane2</Link>
            <br/>
            {this.props.children}
            </div>
        );
    }
}


export default Nav;