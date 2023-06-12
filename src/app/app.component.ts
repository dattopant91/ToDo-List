import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDoLists';


  list: any[] = [];
  newTodo!: string;

  addTask(item: string) {
    if (this.newTodo.trim().length > 0) {
      this.list.push({ id: this.list.length, name: item })
      this.newTodo = '';
      localStorage.setItem('list', JSON.stringify(this.list));    //storing the localstorage...
    }
  }
  ngOnInit(): void {
    const storedTodos = localStorage.getItem('list');       
    if (storedTodos) {
      this.list = JSON.parse(storedTodos);
    }
  }
  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }

  /* displayVal:any[]=[];
 
   getValue(val:string){
     this.displayVal.push({id:this.displayVal.length,name1:val})
   }
 
   count=0;
   counter(type:string){
     type==='add' ?this.count++:this.count--
   }*/

}
