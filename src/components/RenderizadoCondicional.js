import React, {Component} from 'react';

function Login() {
    return(
        <div>Login</div>
    );
}

function Logout() {
return(
    <div>Logout</div>
);
}

export default class RenderizadoCondicional extends Component{
constructor(props){
    super(props);
    this.state={
        session:true,
    }

}

    render(){
        return(
            <div>
            <h2>Renderizando Condicional</h2>
            {this.state.session? <Login/>:<Logout/>}
            </div>
        
        );

    }
}