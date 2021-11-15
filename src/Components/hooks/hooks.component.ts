import { Component, OnInit , DoCheck, OnDestroy} from "@angular/core";

@Component({
    selector:"hooks-angular",
    templateUrl: "./hooks.component.html"
    
})
export class Hooks implements OnInit{

    public mensaje: string;

    constructor(){
        console.log("Constructor, yo voy primero");
        this.mensaje = "Mensaje desde Component";
    }

    ngOnInit(): void{
        console.log("ngOnInit(): Ejecutando despues del contructor");
    }

    ngDoCheck(){
        console.log("ngDoCheck(): La vista ha cambiado");
    }

    cambiaMensaje(): void{
        this.mensaje = "He cambiado";
    }

    ngOnDestroy(): void{
        console.log("ngOnDestroy(): Componente destruido");
    }
}