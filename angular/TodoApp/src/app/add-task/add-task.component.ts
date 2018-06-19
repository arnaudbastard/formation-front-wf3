import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../shared/model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // Permet d'émettre un évènement lors de la création d'une nouvelle tâche.
  // @type {EventEmitter<any>}


  @Output() newTaskEvent = new EventEmitter();

  // La tâche à créer.
  // @type {Task}
   

  task: Task = new Task();

  // Permet de réinitialiser le formulaire
  // @type {boolean}
  active = true;

  constructor() { }

  ngOnInit() {
  }

  /* Fonction appelée lors de la création d'une tâche.*/
  addTask() {
  /**
   * Lorsque l'utilisateur soumet sa tâche, j'émet l'évènement avec la nouvelle tâche.
   */
  this.newTaskEvent.emit(this.task);


  this.task = new Task();
  this.active = false;
  setTimeout (() => this.active = true, 0);

  }

}
