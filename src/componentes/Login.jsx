import { Component } from "react";
import Boton from "./Boton";

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    } 

    render(){
        return(
            <div className="Contenedor">
                componentes Login
                <Boton
                 ruta = "/alumnos"  
                >
                    Ir a Alumnos
                </Boton>
            </div>
        )
    }
}