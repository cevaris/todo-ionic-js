import { Component, OnInit } from '@angular/core';
import { KanbanCardComponent } from 'src/app/shared/kanban-card/kanban-card.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  kanbanCards = [
    new KanbanCardComponent('Ipsum anim ea duis dolore ut consequat exercitation sit ipsum.'),
    new KanbanCardComponent('Sunt eiusmod ex officia laboris sunt eu amet velit minim ullamco in.'),
    new KanbanCardComponent('Mollit labore consectetur minim sunt mollit exercitation velit commodo nisi minim aliquip amet in.')
  ];

  constructor() { }

  ngOnInit() {
  }

}
