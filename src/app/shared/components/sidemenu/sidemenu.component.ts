import { Component } from '@angular/core';

interface MenuItem {
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'formularios/template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: 'formularios/template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'formularios/template/switches'
    }
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: 'formularios/reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: 'formularios/reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'formularios/reactive/switches'
    }
  ]
}
