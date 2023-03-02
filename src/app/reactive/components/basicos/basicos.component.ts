import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  // miFormulario: FormGroup = new FormGroup({
  //   producto: new FormControl('RTX 4080Ti'),
  //   precio: new FormControl(3000),
  //   existencias: new FormControl(5)
  // });
  
  miFormulario: FormGroup = this.fb.group({
    producto: [ ,[Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(1)]]
  })
  
  constructor (
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      this.miFormulario.setValue({
        producto: 'Choclitos',
        precio: 6000,
        existencias: 10
      })
  }

  campoEsValido( campo: string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset()
  }

  }
