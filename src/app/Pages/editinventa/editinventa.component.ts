import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { InventarioService } from 'src/app/services/inventario.service';
import { inventario } from 'src/app/models/inventario';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editinventa',
  templateUrl: './editinventa.component.html',
  styleUrls: ['./editinventa.component.css']
})
export class EditinventaComponent implements OnInit {
 inventario: inventario = new inventario;
 datos: any;

 listCat: any;


  constructor(private router: Router, private activeRoute: ActivatedRoute,
     private InventarioService: InventarioService, private CategoriasService: CategoriasService) { }
  
    
    
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.InventarioService.edit(id).pipe(
        map((resp: any) => {
          this.inventario = resp;
          console.log(this.inventario);
          return this.inventario
        })
      ).subscribe();
    }
    this.CategoriasService.listCategorias().subscribe((resp) => {
      this.listCat = resp;
      console.log(this.listCat);
    });
  }

  guardar(from: NgForm) {
    if (from.invalid) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Favor de verificar los datos ingresados',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    console.log(this.inventario);
    if (this.inventario.id) {
      this.InventarioService.editInventario(this.inventario).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se actualizo correctament',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/inventario']);
        });
    }
  }
 
}
