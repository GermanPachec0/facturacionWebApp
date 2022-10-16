import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  elID:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private crudService: CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    
    this.elID = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.GetOne(this.elID).subscribe(
      respuesta => {
          console.log(respuesta);
          this.formularioDeEmpleados.setValue({
            username: respuesta['body']['username'],
            surname: respuesta['body']['surname'],
            cuit: respuesta['body']['cuit'],
            userType: respuesta['body']['userType']


             
          });
      });

      this.formularioDeEmpleados = this.formulario.group(
        {
          username:[''],
          surname:[''],
          cuit:[''],
          userType:['']

        }
      )

   }

  ngOnInit(): void {

  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleados.value);
    this.crudService.EditarEmpleado(this.elID, this.formularioDeEmpleados.value).subscribe(() => {
      this.ruteador.navigateByUrl('/listar-usuario');
    });
   
  }

  

}
