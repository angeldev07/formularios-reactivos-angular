import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basicos', component: BasicosComponent },
      {path: 'switches', component: SwitchesComponent },
      {path: 'dinamicos', component: DinamicosComponent },
      {path: '**', redirectTo: 'basicos'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
