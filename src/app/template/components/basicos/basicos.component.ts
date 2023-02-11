import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor () {}

  guardar( ){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched
  }

  precioValido(): boolean{
    return this.miFormulario?.form.controls['precio']?.touched && this.miFormulario?.form.controls['precio']?.value <= 0;
  }
}