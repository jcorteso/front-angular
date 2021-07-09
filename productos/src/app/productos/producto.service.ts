import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 
  constructor(private http: HttpClient) { }
  //obtener porductos
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.apiUrl + "/listar");
  }
  //obtener un producto
  get(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.apiUrl + "/ver/" + id);
  }
}
