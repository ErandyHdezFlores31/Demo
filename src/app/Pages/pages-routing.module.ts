import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { LoginComponent } from './login/login.component';
// import { RegistroComponent } from './registro/registro.component';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { AgregarinventarioComponent} from './agregarinventario/agregarinventario.component';
// import { InventarioComponent } from './inventario/inventario.component';
// import { PerfilusuarioComponent } from './perfilusuario/perfilusuario.component';
// import { EditinventaComponent } from './editinventa/editinventa.component';
// import { AgrecategoriaComponent } from './agrecategoria/agrecategoria.component';
// import { ApartadosComponent } from './apartados/apartados.component';
// import { ApartadoslistComponent } from './apartadoslist/apartadoslist.component';
// import { NuevaventaComponent } from './nuevaventa/nuevaventa.component';
// import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'registro', component: RegistroComponent },
//   { path: 'nav', component: NavbarComponent },
//   { path: 'agregar', component: AgregarinventarioComponent },
//   { path: 'inventario', component: InventarioComponent },
//   { path: 'perfil', component: PerfilusuarioComponent },
//   { path: 'edit/:id', component: EditinventaComponent },
//   { path: 'agrecategoria', component: AgrecategoriaComponent },
//   { path: 'apartados', component: ApartadosComponent },
//   { path: 'apartadoslist', component: ApartadoslistComponent },
//   { path: 'nuevaventa', component: NuevaventaComponent },
//   { path: 'ventas', component: VentasComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
