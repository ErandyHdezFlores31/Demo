import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/login';
import { environment } from 'src/environments/environment';


const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(datos: login) {
    return this.http.post(`${URL}login`, datos);
  }

  vista() { //Listar
    return this.http.get(`${URL}list`);
  }
}
