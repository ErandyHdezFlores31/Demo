import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agrecategoria',
  templateUrl: './agrecategoria.component.html',
  styleUrls: ['./agrecategoria.component.css']
})
export class AgrecategoriaComponent implements OnInit {
  cate: categorias = new categorias();
  cargando: boolean = false;
  list: any;

  constructor(private router: Router, private CategoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.listCate();
  }

  listCate() {
    this.cargando = true;
    this.CategoriasService.listCategorias().subscribe((resp) => {
      this.cargando = false;
      this.list = resp;
      console.log(this.list);
    });
  }

  agregarCate(form: NgForm) {
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
    this.CategoriasService.agreCategorias(this.cate).subscribe(
      res => {
        console.log(res);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Agregado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listCate();
        this.limpiarInput();
      },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text: 'Favor de verificar',
        });
        console.log('Datos incorrectos');
        return;
      }
    );
  }

  borrar(id: any){
    if(confirm('Seguro que quiere eliminar este registro?')){
      this.CategoriasService.deleteCategorias(id).subscribe((data)=>{
        this.listCate();
      },(error)=>{
        console.log(error);
      })
    }
  }

  limpiarInput() {
    this.cate.nomcategoria = '';
  }
}
