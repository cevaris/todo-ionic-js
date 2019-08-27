import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KanbanTodoPage } from './kanban-todo.page';

const routes: Routes = [
  {
    path: '',
    component: KanbanTodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KanbanTodoPage]
})
export class KanbanTodoPageModule {}
