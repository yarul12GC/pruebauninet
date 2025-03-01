import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})

export default class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.validarTexto]],
      apellido: ['', [Validators.required, this.validarTexto]],
      fechaNacimiento: ['', [Validators.required, this.validarMayorEdad]],
    });
  }

  validarTexto(control: any) {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(control.value)) {
      return { invalidTexto: true };
    }
    return null;
  }


  validarMayorEdad(control: any) {
    const fechaNacimiento = new Date(control.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (
      hoy.getMonth() < fechaNacimiento.getMonth() ||
      (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad;
    }

    if (edad < 18) {
      return { menorDeEdad: true };
    }
    return null;
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}