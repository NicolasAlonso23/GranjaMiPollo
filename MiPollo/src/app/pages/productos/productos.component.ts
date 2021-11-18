import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Producto } from './interfaces/producto.interface';
import { ProductosService } from './servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos!:Producto[];

  constructor(private productoSvc: ProductosService) { }

  ngOnInit(): void {
    this.productoSvc.getProductos()
    .pipe(
        tap((productos: Producto[]) => this.productos = productos)
    ).subscribe();
  }

}
