import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]], 
    favoritos: this.fb.array([
      ['Halo ce', [Validators.required]],
      ['Halo 2', [Validators.required]]
    ], Validators.required)
  });

  nuevoJuego = this.fb.control('', [Validators.required])

  constructor(
    private fb: FormBuilder
  ){}

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

  isValid( control: string) {
    return this.miFormulario.controls[control].errors && this.miFormulario.controls[control].touched;
  }

  agregar( ) {
   if(this.nuevoJuego.invalid) return 

   this.favoritosArr.push(new FormControl(this.nuevoJuego.value, [Validators.required]))
   this.nuevoJuego.reset()
  }

  borrar(index: number){
    this.favoritosArr.removeAt(index)
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      console.log('here');
      
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();

  }

}
