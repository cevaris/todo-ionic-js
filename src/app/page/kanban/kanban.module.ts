import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KanbanPage } from './kanban.page';
import { KanbanCardComponent } from 'src/app/shared/kanban-card/kanban-card.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KanbanPage, KanbanCardComponent]
})
export class KanbanPageModule {}
