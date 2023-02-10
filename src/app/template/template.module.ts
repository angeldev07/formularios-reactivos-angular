import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './components/switches/switches.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { BasicosComponent } from './components/basicos/basicos.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
