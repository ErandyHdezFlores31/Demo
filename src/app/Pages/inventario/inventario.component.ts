import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  filterPost = '';
  cargando: boolean = false;
  inventario: any;
  
  inventa: inventario = new inventario;
  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  id: any;

  constructor(private InventarioService: InventarioService) { }

  ngOnInit(): void {
    this.listInventario();
  }
  listInventario() {
    this.cargando = true;
    this.InventarioService.inventa().subscribe((resp) => {
      this.cargando = false;
      this.inventario = resp;
      console.log(this.inventario);
    });
  }

  ordenar(order: string){
    if (this.order === order){
      this.reversa = !this.reversa;
    }
    this.order = order;
  }

  borrar(id: any){
    if(confirm('Seguro que quiere eliminar este registro?')){
      this.InventarioService.delete(id).subscribe((data)=>{
        this.listInventario();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
