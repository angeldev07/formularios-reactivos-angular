import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'formularios/template',
    loadChildren: () => import('./template/template.module').then( t => t.TemplateModule)
  },
  {
    path: 'formularios/reactive',
    loadChildren: () => import('./reactive/reactive.module').then( r => r.ReactiveModule)
  },
  {
    path: '**',
    redirectTo: 'formularios/template'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
