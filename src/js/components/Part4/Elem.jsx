import React from 'react';
import Mixin from './Mixin.jsx'

const Elem = (props) => <div><button className="btn btn-primary" onClick={props.update}>You have clicked me <span className="badge">{props.value}</span> times!</button><br/><br/></div>


export default Elem;

