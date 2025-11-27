import { Component } from '@angular/core';
import { Pregunta } from '../../components/pregunta/pregunta';
import { Question } from '../../models/question.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividad',
  imports: [Pregunta, ReactiveFormsModule],
  templateUrl: './actividad.html',
  styleUrl: './actividad.css',
})
export class Actividad {
  _question: Question = {
    id: 1,
    text: '¿Qué es la Analítica de Datos en Educación (ADE)?',
    options: [
      { label: 'a) Una metodología para recopilar datos de estudiantes.', value: 'a' },
      { label: 'b) El uso de datos para mejorar la enseñanza y el aprendizaje.', value: 'b' },
      { label: 'c) Un sistema para registrar calificaciones de manera eficiente.', value: 'c' },
      { label: 'd) Una técnica para evaluar el desempeño docente.', value: 'd' },
    ],
    correctAnswer: 'b',
  };
}
