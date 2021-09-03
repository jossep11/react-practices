import React, {Component} from 'react';

function EstadoaHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );

}

export default class Estado extends Component{

    constructor(props){
        super(props);
       
    //this is a object of the state 
        this.state={
            contador:0,
            //contador2:1,
        };

/*         setInterval(() => {
        this.setState({
            contador:this.state.contador+1,
           // contador2:this.state.contador2+2
        });    

        }, 1000); */
    }


    render(){
        return (
            <div>
            El state
            <p>{this.state.contador}</p>
            <p>{this.state.contador2}</p>
            <EstadoaHijo contadorHijo={this.state.contador}/>
            </div>
        );
    }
}
