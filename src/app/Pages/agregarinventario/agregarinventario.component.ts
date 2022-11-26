import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarinventario',
  templateUrl: './agregarinventario.component.html',
  styleUrls: ['./agregarinventario.component.css']
})
export class AgregarinventarioComponent implements OnInit {
  inv: inventario = new inventario();
  cargando: boolean = false;
  list: any;
  listCat: any;
  
  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  constructor(private router: Router, private InventarioService: InventarioService,
              private CategoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.listInventario();
    this.listCate();
  }

  listInventario() {
    this.cargando = true;
    this.InventarioService.inventa().subscribe((resp) => {
      this.cargando = false;
      this.list = resp;
      console.log(this.list);
    });
  }

  listCate() {
    this.CategoriasService.listCategorias().subscribe((resp) => {
      this.listCat = resp;
      console.log(this.listCat);
    });
  }

  ordenar(order: string){
    if (this.order === order){
      this.reversa = !this.reversa;
    }
    this.order = order;
  }

  refresh(): void { 
    window.location.reload(); }

  inventarioAgregar(form: NgForm) {
    if (form.invalid) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Falta un campo por agregar, favor de verificar',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    this.InventarioService.agInventario(this.inv).subscribe(
      res => {
        console.log(res);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Agregado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listInventario();
        this.limpiarInput();
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text: 'Favor de verificar',
        });
        this.limpiarInput();
        console.log('Datos incorrectos');
        return;
      }
    );
  }

  limpiarInput() {
    this.inv.clave = '';
    this.inv.nombre = '';
    this.inv.cantidad = '';
    this.inv.preciolista = '';
    this.inv.preciopublico = '';
    this.inv.categorias_id = '';
  }

}
