import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PagesRoutingModule } from './Pages/pages-routing.module';

import { LoginComponent } from './Pages/login/login.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgregarinventarioComponent} from './Pages/agregarinventario/agregarinventario.component';
import { InventarioComponent } from './Pages/inventario/inventario.component';
import { PerfilusuarioComponent } from './Pages/perfilusuario/perfilusuario.component';
import { EditinventaComponent } from './Pages/editinventa/editinventa.component';
import { AgrecategoriaComponent } from './Pages/agrecategoria/agrecategoria.component';
import { ApartadosComponent } from './Pages/apartados/apartados.component';
import { ApartadoslistComponent } from './Pages/apartadoslist/apartadoslist.component';
import { NuevaventaComponent } from './Pages/nuevaventa/nuevaventa.component';
import { VentasComponent } from './Pages/ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: LoginComponent },

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'agregar', component: AgregarinventarioComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'perfil', component: PerfilusuarioComponent },
  { path: 'edit/:id', component: EditinventaComponent },
  { path: 'agrecategoria', component: AgrecategoriaComponent },
  { path: 'apartados', component: ApartadosComponent },
  { path: 'apartadoslist', component: ApartadoslistComponent },
  { path: 'nuevaventa', component: NuevaventaComponent },
  { path: 'ventas', component: VentasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  // PagesRoutingModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
