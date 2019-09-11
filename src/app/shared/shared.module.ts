import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [KanbanCardComponent],
    exports: [KanbanCardComponent]
})
export class SharedModule { }
