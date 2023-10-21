import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { producto } from '../shared/models/productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Array <producto>> {
    return this.http.get<Array<producto>>('https://fakestoreapi.com/products')
  }
}
