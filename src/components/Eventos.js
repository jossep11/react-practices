import React, {Component} from 'react';

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };
        this.sumar=this.sumar.bind(this);
        this.restar=this.restar.bind(this);
    }
 
 
 sumar(e){
     console.log('sumando');
     this.setState({
         contador:this.state.contador+1,
     });
 }

 restar(e){
    console.log('restando');
    this.setState({
        contador:this.state.contador-1,
    });
}

render(){
    return(
        <div>
            <h2>Eventos en componentes de clases ES6</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
        );
    }

}




//Properties Initializer
export class EventosES7 extends Component{
    state={
            contador:0,
        };

 
 //Arrow Functions
 sumar =(e)=>{
     console.log('sumando');
     console.log(this);
     this.setState({
         contador:this.state.contador+1,
     });
 }

 restar=(e)=>{
    console.log('restando');
    console.log(this);
    this.setState({
        contador:this.state.contador-1,
    });
}

render(){
    return(
        <div>
            <h2>Eventos en componentes de clases ES7</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <h3>{this.state.contador}</h3>
        </div>
        );
    }

}


/* function Boton(props) {
    return(
        <button onClick={props.myOnClick}>
            Boton componente
        </button>
    );
} */

//Variable expresada
const Boton=(props)=>(
    <button onClick={props.myOnClick}>
    Boton componente
    </button>
);

export class MasSobreEventos extends Component{
handleClick=(e, mensaje)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
    
}
    render(){
        return(
            <div>
                <h3>Mas Sobre Eventos</h3>
                <button onClick={(e) => 
                    this.handleClick(e, 'hola, pasando pasametro desde un evento')}>
                    Saludar
                </button>
    
    {/* Evento personalizado, para esto hay que create a prop and pass it to the component
    this is an error */}
        {/* <Boton onClick={(e) => 
        this.handleClick(e, 'hola, pasando pasametro desde un evento')}/> */}

        <Boton myOnClick={(e) => 
        this.handleClick(e, 'hola, pasando pasametro desde un evento')}/>    
            </div>
        );
    }
}