import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard.component';
import { RegistroUsuariosComponent } from '../registro-usuarios/registro-usuarios.component';
import { InformesComponent } from '../../informes/informes.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'registro-usuarios',
    component: RegistroUsuariosComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
