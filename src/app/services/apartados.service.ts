import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apartados } from '../models/apartados';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class ApartadosService {

  constructor(private http: HttpClient) { }

  listApartados() { //Listar
    return this.http.get(`${URL}apartados`);
  }

  agApartados(datos: apartados){ //Agregar
    return this.http.post(`${URL}apartados`, datos);
  }

  editApartados(datos: apartados){ //Editar
    return this.http.put(`${URL}apartados/${datos.id}`, datos);
  }

  delete(id: any){ //Eliminar
    return this.http.delete(`${URL}apartados/${id}`);

  }
}
