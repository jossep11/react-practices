import React, {Component} from 'react';

export default class Padre extends Component{
    state={
        contador:0,
    };

    incrementarContador=(e)=>{
        this.setState({
            contador:this.state.contador+1,
        })
    }

    render(){
        return(
            <div>
                     <h2>
                    Comunicacion entre componentes
                    </h2>
                    <p>{this.state.contador}</p>
                    <Hijo incrementarContador={this.incrementarContador}  mensaje="Mensaje 1"/>
                    <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje 2"/>

            </div>
        );
    }

}

function Hijo(props) {
    return(
    <>
    <h2>{props.mensaje}</h2>
    <button onClick={props.incrementarContador}>
+
    </button>
     </>
         )    
}
