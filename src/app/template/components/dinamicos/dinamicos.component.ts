import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Angel Garcia',
    favoritos: [
      { id: 1, nombre: 'Halo CE' },
      { id: 2, nombre: 'Halo 2' }
    ]
  }

  guardar() {
    console.log('Formulario posteado')
  }
  
  agregarFav() {
    this.persona.favoritos.push( 
      {
        id: Math.floor((Math.random()*100)+1), 
        nombre: this.nuevoJuego
      } )
      
    this.nuevoJuego = ''
  }

  eliminarFav( index: number ){
    this.persona.favoritos.splice(index,1);
  }
}
