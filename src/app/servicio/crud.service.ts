import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string = 'http://localhost:8090/facturacion/api/users/';


  constructor(private clientService:HttpClient) {}

  ObtenerUsuarios(){
    return this.clientService.get(this.API);
  }


  GetOne(id:any):Observable<any>{
    return this.clientService.get(this.API+id);
  }

  EditarEmpleado(id:any,datosEmpleados:any):Observable<any>{
    return this.clientService.put(this.API+id,datosEmpleados);
  }
 
  AgregarUsuario(datosUsuario:any):Observable<any>{
    return this.clientService.post(this.API+"save",datosUsuario);
  }

  EliminarUsuario(id:any):Observable<any>{
    return this.clientService.delete(this.API+id);
  }

}
