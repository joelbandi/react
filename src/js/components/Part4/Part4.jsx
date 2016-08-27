import React from 'react';
import Mixin from './Mixin.jsx';
import Elem from './Elem.jsx';
import Github from '../Github.jsx'

let MixedButton = Mixin(Elem);


const Heading4 = () => <h1>Part 4: <br/> Mixins and higher order components</h1>
class Part4 extends React.Component{;
    render(){
        return (
            <div id="Part4" className="well">
                <Heading4/>
                <h4>Higher order component is simply a component that cannot be rendered. 
                It is a template like class that is simply a function that takes in a stateless component and  returns another renderable and state-full class. 
                Keep in mind, that classes is just a syntactic sugar and class is nothing but a higher order function that just aids in prototypal inheritance and hence the name first order.   
                </h4>
                <MixedButton/>
                <Github path="Part4"/>
            </div>
        );
    }
}



export default Part4;