import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorias } from '../models/categorias';
import { environment } from 'src/environments/environment';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  listCategorias() { //Listar
    return this.http.get(`${URL}categorias`);
  }

  agreCategorias(datos: categorias){ //Agregar
    return this.http.post(`${URL}categorias`, datos);
  }

  editCategorias(datos: categorias){ //Editar
    return this.http.put(`${URL}categorias/${datos.id}`, datos);
  }

  deleteCategorias(id: any){ //Eliminar
    return this.http.delete(`${URL}categorias/${id}`);

  }
}
