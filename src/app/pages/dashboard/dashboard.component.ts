import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Titulos } from 'src/app/shared/models/titulos.model';
import { producto } from 'src/app/shared/models/productos.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  productos: Array<producto> = []
  formulario: FormGroup = new FormGroup({
    categoria: new FormControl('', [Validators.required])  
  })
  productosFiltro: Array<producto> = []

  constructor(private productosService: ProductosService){}

  onClickTitulo(value: string): void{
    alert(value)
  }

  loadProductos(): void{
    this.productosService.getAll().subscribe({
      next: (resp) => {
        this.productos = [...resp]
        this.productosFiltro = [...resp]
      }, 
      error: (error) =>{
        console.error(error)
      },
      complete: ()=>{
        console.log('Finalizo la consulta')
      }
    })
  }

  buscarProductos(): void{
    this.productosFiltro = [...this.productos].filter(item=>{
      return item.category.toLowerCase().includes(this.formulario.get('categoria')?.value.toLowerCase())
    })
  }
}
