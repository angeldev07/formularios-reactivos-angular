import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  
  persona = {
    genero: 'M',
    notificaciones: false
  }

  miFormulario = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [false, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]]
  });

  constructor ( 
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false
    })

    this.miFormulario.valueChanges.subscribe( ({genero, notificaciones}) => {
      this.persona = {
        genero : genero!,
        notificaciones : notificaciones!
      }
    } )
  }

  guardar ( ){
    const value = {...this.miFormulario.value}
    delete value.condiciones

    this.persona = {
      genero: value.genero!,
      notificaciones: value.notificaciones!
    };
  }

}
