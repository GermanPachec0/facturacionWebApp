import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  Usuarios:any;
  constructor(
    private crudService:CrudService
    ) { }

  ngOnInit(): void {
    this.crudService.ObtenerUsuarios().subscribe(rta => this.Usuarios = rta)
  }

  EliminarUsuario(id:any){
    console.log(id);
    this.crudService.EliminarUsuario(id).subscribe(
      () => {
        let indice = this.Usuarios.indexOf(id);
        this.Usuarios.splice(indice,1);
      }
    );
   
  }
}
