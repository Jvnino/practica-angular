import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DashboardComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
