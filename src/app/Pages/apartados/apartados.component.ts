import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { apartados } from 'src/app/models/apartados';
import { ApartadosService } from 'src/app/services/apartados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apartados',
  templateUrl: './apartados.component.html',
  styleUrls: ['./apartados.component.css']
})
export class ApartadosComponent implements OnInit {
  apart: apartados = new apartados();
  cargando: boolean = false;
  apartado: any;

  constructor(private router: Router, private ApartadosService: ApartadosService) { }

  ngOnInit(): void {
    this.listApart();
  }

  listApart() {
    this.cargando = true;
    this.ApartadosService.listApartados().subscribe((resp) => {
      this.cargando = false;
      this.apartado = resp;
      console.log(this.apartado);
    });
  }

  agregarApart(form: NgForm) {
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
    this.ApartadosService.agApartados(this.apart).subscribe(
      res => {
        console.log(res);

        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Agregado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.listApart();
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

  limpiarInput() {
    this.apart.fechaini = '';
    this.apart.nombre = '';
    this.apart.producto = '';
    this.apart.cantidad = '';
    this.apart.preciounitario = '';
    this.apart.total = '';
    this.apart.adelanto = '';
    this.apart.resto = '';
    this.apart.fechaven = '';
  }

}
