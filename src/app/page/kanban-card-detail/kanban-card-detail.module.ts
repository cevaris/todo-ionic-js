import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KanbanCardDetailPage } from './kanban-card-detail.page';

const routes: Routes = [
  {
    path: '',
    component: KanbanCardDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KanbanCardDetailPage]
})
export class KanbanCardDetailPageModule {}
