import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventario } from '../models/inventario';
import { environment } from 'src/environments/environment';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  inventa() { //Listar
    return this.http.get(`${URL}inventario`);
  }

  agInventario(datos: inventario){ //Agregar
    return this.http.post(`${URL}inventario`, datos);
  }

  editInventario(datos: inventario){ //Editar
    return this.http.put(`${URL}inventario/${datos.id}`, datos);
  }

  edit(id: any){ //Listar por id
    return this.http.get(`${URL}inventario/${id}`)
  }

  delete(id: any){ //Eliminar
    return this.http.delete(`${URL}inventario/${id}`);

  }
}
