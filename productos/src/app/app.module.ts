import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './productos/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio/productos', component: ProductosComponent },
  

]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
