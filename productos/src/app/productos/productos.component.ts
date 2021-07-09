import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./css/styles.css']
})
export class ProductosComponent implements OnInit {
  titulo:string="lista de productos";
  producto:Producto= new Producto();

  productos:Producto[]=[];

  constructor(private productoservice:ProductoService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.productoservice.getAll().subscribe(
      prod =>this.productos=prod
    );

    this.ver();
  }
  ver():void {
    this.activateRoute.params.subscribe(
      p=>{
        let id = p['id'];
        if(id){
          this.productoservice.get(id).subscribe(
            pr=>this.producto
          );
        }
      }
    )

  }

}
