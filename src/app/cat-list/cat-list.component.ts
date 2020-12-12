import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { MatIconModule } from '@angular/material/icon';
import { Cat } from '../cat';

@Component({
    selector: 'cat-list',
    templateUrl: './cat-list.component.html',
    //styleUrls: ['./cat-list.component.scss'],
    providers: [HttpService]
})

export class CatListComponent implements OnInit {
    @Input() formData: Cat;
    cats: Cat[]=[];

    constructor(private httpService: HttpService) {}

    ngOnInit(): void {
        this.httpService.getData().subscribe(data => this.cats=data);
        console.log(this.cats);
    }

    like(currentCat: Cat): void {
        currentCat.like++;
    }

    dislike(currentCat: Cat): void {
        if(currentCat.dislike) {
           currentCat.dislike++;
        } else {
           currentCat.dislike = 1;
        }   
    }

    addCat(formData: Cat): void {
        this.cats.unshift(formData);
    }

    /*

    deleteTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id != id);  
    }

    updateTodo(todoData: Todo): void {
        let updatedTodo = todoData;
        let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
        this.clearEditing(); 
    }

    toggleCompleted(todoData: Todo): void {
        todoData.completed = !todoData.completed;
        let updatedTodo = todoData;
        let existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
    }

    editTodo(todoData: Todo): void {
        this.editing = true;
        Object.assign(this.editingTodo, todoData);
    }

    clearEditing(): void {
         this.editingTodo = new Todo();
         this.editing = false;
    }*/
}