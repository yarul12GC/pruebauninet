import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Importa ReactiveFormsModule y CommonModule
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export default class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define el formulario y sus validaciones
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.validarTexto]], // Valida que no tenga números ni caracteres especiales
      apellido: ['', [Validators.required, this.validarTexto]], // Valida que no tenga números ni caracteres especiales
      fechaNacimiento: ['', [Validators.required, this.validarMayorEdad]], // Valida que sea mayor de edad
    });
  }

  // Validador personalizado para nombre y apellido
  validarTexto(control: any) {
    const regex = /^[a-zA-Z\s]*$/; // Solo letras y espacios
    if (!regex.test(control.value)) {
      return { invalidTexto: true }; // Retorna un error si no cumple
    }
    return null; // Válido
  }

  // Validador personalizado para fecha de nacimiento (mayor de edad)
  validarMayorEdad(control: any) {
    const fechaNacimiento = new Date(control.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // Verifica si ya cumplió años este año
    if (
      hoy.getMonth() < fechaNacimiento.getMonth() ||
      (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad;
    }

    if (edad < 18) {
      return { menorDeEdad: true }; // Retorna un error si es menor de edad
    }
    return null; // Válido
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}