import { Component, Input } from '@angular/core';
import { Tipos } from '../types/tipos.type';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent {
  @Input() titulo: string = ''
  claseCss: string = ''
  @Input() set color(value: string){
    this.claseCss = value
  }
  @Input() tipo: Tipos ='h1'
}
