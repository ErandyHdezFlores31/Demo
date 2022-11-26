import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { InventarioComponent } from './Pages/inventario/inventario.component';
import { AgregarinventarioComponent } from './Pages/agregarinventario/agregarinventario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PerfilusuarioComponent } from './Pages/perfilusuario/perfilusuario.component';
import { BusquedaPipe } from './Pipes/busqueda.pipe';
import { EditinventaComponent } from './Pages/editinventa/editinventa.component';
import { AgrecategoriaComponent } from './Pages/agrecategoria/agrecategoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import { ApartadosComponent } from './Pages/apartados/apartados.component';
import { VentasComponent } from './Pages/ventas/ventas.component';
import { ApartadoslistComponent } from './Pages/apartadoslist/apartadoslist.component';
import { NuevaventaComponent } from './Pages/nuevaventa/nuevaventa.component';
import { BusapartadosPipe } from './Pipes/busapartados.pipe';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InventarioComponent,
    AgregarinventarioComponent,
    NavbarComponent,
    RegistroComponent,
    PerfilusuarioComponent,
    BusquedaPipe,
    EditinventaComponent,
    AgrecategoriaComponent,
    ApartadosComponent,
    VentasComponent,
    ApartadoslistComponent,
    NuevaventaComponent,
    BusapartadosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
