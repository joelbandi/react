import React from 'react';
// const getpokemon  = require('pokemon').random;

const PokeRow = (props) => {
    return (
        <tr>
            <td>{props.mondata.id}</td>
            <td>{props.mondata.name}</td>
        </tr>
    );
}

class Poketable extends React.Component {
    constructor() {
        super();
        this.state = {
            pokedata: [{
            "id": 1,
            "name": "Sharon Myers"
            }, {
            "id": 2,
            "name": "Dennis Ross"
            }, {
            "id": 3,
            "name": "Harold Crawford"
            }, {
            "id": 4,
            "name": "Beverly Pierce"
            }, {
            "id": 5,
            "name": "Jonathan Ramirez"
            }, {
            "id": 6,
            "name": "Maria Foster"
            }, {
            "id": 7,
            "name": "Justin Ortiz"
            }, {
            "id": 8,
            "name": "Anna Flores"
            }, {
            "id": 9,
            "name": "Denise Phillips"
            }, {
            "id": 10,
            "name": "Melissa Moreno"
            }]
        }

    }
    render() {
        let rows = this.state.pokedata.map((mon) => { return (<PokeRow key={mon.id} mondata={mon}></PokeRow>) });
        return (
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}





export default Poketable;