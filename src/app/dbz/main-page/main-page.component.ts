import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'M.Roshi',
    poder: 120000
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }    //OBTENER INFO DESDE UN SERVICIO, EN ESTE CASO UN ARREGLO DE PERSONAJES

  // agregarNuevoPersonaje (argumento: Personaje) {
  //   this.personajes.push (argumento);
  // }

  constructor () {}
  
}
