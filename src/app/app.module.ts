import { Deportes } from './../Components/deportes/deportes.component';
import { PrimerComponent } from './../Components/PrimerComponent/primercomponent';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Hooks } from 'src/Components/hooks/hooks.component';
import { FormularioBindingModel } from 'src/Components/formulariobindingmodel/formulariobindingmodel.component';
import { FormsModule } from '@angular/forms';
import { FormularioReferencia } from 'src/Components/formulariosreferencia/formulariosreferencia.component';
import { TablaMultiplicar } from 'src/Components/tablamultiplicar/tablamultiplicar.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent
    ,PrimerComponent
    ,Hooks
    ,Deportes
    ,FormularioBindingModel
    ,FormularioReferencia
    ,TablaMultiplicar, PruebaComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
