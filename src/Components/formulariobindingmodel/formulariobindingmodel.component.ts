import { Component } from "@angular/core";

@Component({
    selector:"app-formulario-binding-model",
    templateUrl:"./formulariobindingmodel.component.html"
})
export class FormularioBindingModel{
    public user:any;
    public mensaje: string;

    constructor(){
        this.user = {
            nomrbe:"",
            apellidos:"",
            edad:0
        }
        this.mensaje = "";
    }
    recibirformulario():void{
        this.mensaje = "Datos recibidos!!!";
    }
}