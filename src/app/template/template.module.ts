import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './components/switches/switches.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { BasicosComponent } from './components/basicos/basicos.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './components/directives/custom-min.directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
  ]
})
export class TemplateModule { }
