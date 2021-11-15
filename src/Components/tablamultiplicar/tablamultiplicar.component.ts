import { Component, ViewChild ,ElementRef } from "@angular/core";

@Component({
    selector:"app-tabla-multiplicar"
    ,templateUrl:"./tablamultiplicar.component.html"
})

export class TablaMultiplicar{
    
    @ViewChild("cajanumero") cajanumero1: ElementRef;
    public tabla: Array<number>;
    public numero: number;

    constructor(){
        this.tabla = [];
        this.cajanumero1 = new ElementRef(0);
        this.numero = this.cajanumero1.nativeElement.value;
    }

    calculaTabla():void{
        this.numero = this.cajanumero1.nativeElement.value;
        var j = 1;
        for(let i = 0; i < 10; i++)
        {
            this.tabla[i] = this.numero*j;
            j++;
        }
    }
}