import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'; 

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoList: AngularFireList<any>; 
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('titles'); 
    return this.toDoList; 
  }

  addTitle(title: String){
    this.toDoList.push({
      title: title,  
      isChecked: false
    }); 
  }

  checkOrUncheck($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag}); 
  }

  remoevTitle($key: string){
    this.toDoList.remove($key); 
  }

}
