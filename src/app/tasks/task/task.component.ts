import { Component , Input, Output , EventEmitter } from '@angular/core';

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  duedate: string;
};

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  oncompleteTask(){
    this.complete.emit(this.task.id);
  }
}
