import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuario } from '../../models/usuario';

import { Router } from '@angular/router';
import { FormControl, FormGroup,Validators, FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  public registroForm: FormGroup;
  public nuevoUsuario: Usuario;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    /* 
  nombre: string;
  apellido1: string;
  apellido2: string;
  fechaNacimiento: string;
  email: string;
  password: string;
  */

    this.registroForm = this.fb.group({
        nombre: [,[Validators.required]],
        apellido1: [  ,[Validators.required]],
        apellido2: [,[Validators.required]],
        fechaNacimiento: [,[Validators.required]],
        email: [,[Validators.required]],
        password: [,[Validators.required]]
      });
  }


guardarUsuario(){
  if(this.registroForm.valid){
    this.nuevoUsuario = {} as Usuario;
    this.nuevoUsuario.nombre =  this.registroForm.value.nombre;
    this.nuevoUsuario.apellido1 =  this.registroForm.value.apellido1;
    this.nuevoUsuario.apellido2 =  this.registroForm.value.apellido2;
    this.nuevoUsuario.fechaNacimiento =  this.registroForm.value.fechaNacimiento;
    this.nuevoUsuario.email =  this.registroForm.value.email;
    this.nuevoUsuario.password =  this.registroForm.value.password;
    console.log("RegistroComponent.guardarUsuario: "+ JSON.stringify(this.nuevoUsuario));
    
    this.usuariosService.registro(this.nuevoUsuario).subscribe( data => {
       if(data.status=="ok"){ 
        Swal.fire("Usuario registrado correctamente", " ", "success");
       }else{
        console.log("RegistroComponent.guardarUsuario error data = "+JSON.stringify(data));
       }
      }); 
      
  }else{
    Swal.fire("Errores en el formulario", "Revise los datos", "error");
  }
}

}