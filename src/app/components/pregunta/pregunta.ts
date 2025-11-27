import { Component, Input } from '@angular/core';
import { Question } from '../../models/question.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pregunta.html',
  styleUrl: './pregunta.css',
})
export class Pregunta {
  @Input() pregunta: Question | null = null;
  _form: any;
  _resultado: string = '';
  _resultadoClass: string = 'info';

  constructor(private fb: FormBuilder) {
    this._form = this.fb.group({
      respuesta: [''],
    });
  }

  calificarRespuesta() {
    const respuesta = this._form.get('respuesta').value;
    const esCorrecta = respuesta === this.pregunta?.correctAnswer ? true : false;
    if (esCorrecta) {
      this._resultado = '¡Respuesta correcta!';
      this._resultadoClass = 'success';
    } else {
      this._resultado = 'Respuesta incorrecta. Intenta de nuevo.';
      this._resultadoClass = 'danger';
    }
  }
}
