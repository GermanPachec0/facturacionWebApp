import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  formularioDeUsuarios:FormGroup;
  constructor(  private activatedRoute:ActivatedRoute,
    private crudService: CrudService,
    public formulario:FormBuilder,
    private ruteador:Router) {
        this.formularioDeUsuarios = this.formulario.group({
          
            username:[''],
            surname:[''],
            cuit:[''],
            userType:['']
  
          
        });

     }


  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.AgregarUsuario(this.formularioDeUsuarios.value).subscribe(() => 
    this.ruteador.navigateByUrl('/listar-usuario'));
  }
}
