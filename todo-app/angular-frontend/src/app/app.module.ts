
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    
  ],
  providers: [TodoService, HttpClient],
  
  bootstrap: [AppComponent]
})
export class AppModule { }