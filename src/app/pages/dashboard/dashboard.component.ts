import { Component } from '@angular/core';
import { Titulos } from 'src/app/shared/models/titulos.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tituloDash: string = 'Inicio del dashboard'
  listaTitulos: Array<Titulos> = [
    {texto: 'Titulo 1', color: 'red', tipo: 'h1'},
    {texto: 'Titulo 2', color: 'blue', tipo: 'h1'},
    {texto: 'Titulo 3', color: 'red', tipo: 'h2'},
    {texto: 'Titulo 4', color: 'blue', tipo: 'h2'}
  ]
}
