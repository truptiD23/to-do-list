import { Component , Input} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";



@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId?: string; 
  @Input({required:true}) name!: string;
  isAddingTask = false;
  tasks  = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic features of Angular & how to apply them.',
      duedate: '08-01-2025',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      duedate: '31-05-2025',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      duedate: '15-05-2025',
    },
   
      {
        id: 't4',
        userId: 'u4',
        title: 'Master Angular',
        summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
        duedate: '2025-12-31',
      },
      {
        id: 't5',
        userId: 'u5',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        duedate: '2024-05-31',
      },
      {
        id: 't6',
        userId: 'u6',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        duedate: '2024-06-15',
      },
  ];

    get selectedUserTasks(){
      return this.tasks.filter((task) => task.userId === this.userId)
    }
  
    onCompleteTask(id :string){
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }
}
