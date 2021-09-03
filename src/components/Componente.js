import React, {Component} from 'react';
//Componente funcional expresado con arrow function
const Componente =(props)=> <h2>{props.message}</h2>

/* function Componente(props) {
    return <h2>{props.message}</h2>
} */

/* //We can use classes on react but now they are not that used as functions 
class Componente extends Component{
render(){
    return <h2>Im a message </h2>
    // <h2>{this.props.mensaje} </h2>
    }
} */
export default Componente;