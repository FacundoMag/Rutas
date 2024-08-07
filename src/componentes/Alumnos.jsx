import { Component } from "react";
import Boton from "./Boton";

export default class Alumnos extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log({
            id: this.props.id,
            curso: this.props.curso
            });
    }

    render(){
        return(
            <div className="Contenedor">
                componentes Alumnos
                <Boton
                   ruta = "/login">
                        Ir a Login
                </Boton>
            </div>
        )
    }
}