import { Component , Input, Output , EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user.component';
import { type User} from './user.model'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input({required:true}) user!:{
//   id:string;
//   avatar:string;
//   name :string;
// };
@Input ({required :true}) user !: User 
@Output() select = new EventEmitter();

 get imagePath(){
  return 'assets/users/'+ this.user.avatar
 }
 onSelectUser (){
   this.select.emit(this.user.id);
 }
 
 
}
