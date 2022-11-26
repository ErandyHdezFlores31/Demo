import { Component, OnInit } from '@angular/core';
import { ApartadosService } from 'src/app/services/apartados.service';

@Component({
  selector: 'app-apartadoslist',
  templateUrl: './apartadoslist.component.html',
  styleUrls: ['./apartadoslist.component.css']
})
export class ApartadoslistComponent implements OnInit {
  filterPost = '';
  cargando: boolean = false;
  apartado: any;

  pageActual:number = 1;
  order: string = 'id';
  reversa: boolean = false;

  id: any;

  constructor(private ApartadosService: ApartadosService) { }

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

  ordenar(order: string){
    if (this.order === order){
      this.reversa = !this.reversa;
    }
    this.order = order;
  }

  borrar(id: any){
    if(confirm('Seguro que quiere eliminar este registro?')){
      this.ApartadosService.delete(id).subscribe((data)=>{
        this.listApart();
      },(error)=>{
        console.log(error);
      })
    }
  }

}
