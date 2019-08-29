import { Component, OnInit } from '@angular/core';
import { KanbanCardComponent } from 'src/app/shared/kanban-card/kanban-card.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  cardsTodo = [
    new KanbanCardComponent('Ipsum anim ea duis dolore ut consequat exercitation sit ipsum.'),
    new KanbanCardComponent('Sunt eiusmod ex officia laboris sunt eu amet velit minim ullamco in.'),
    new KanbanCardComponent('Mollit labore consectetur minim sunt mollit exercitation velit commodo nisi minim aliquip amet in.')
  ];

  cardsInProgress = [
    new KanbanCardComponent('Fugiat ex est quis ut id duis nostrud incididunt elit officia exercitation laborum.'),
    new KanbanCardComponent('Voluptate excepteur id mollit dolor commodo pariatur est irure nostrud adipisicing duis enim.'),
    new KanbanCardComponent('Veniam tempor eiusmod laboris nisi nisi do anim aliquip sint exercitation duis adipisicing.')
  ];

  cardsComplete = [
    new KanbanCardComponent('Nostrud et exercitation exercitation dolore id eu sint duis aute fugiat sint.'),
    new KanbanCardComponent('Dolor ad consectetur velit cupidatat deserunt ut elit reprehenderit veniam aliqua ea.'),
    new KanbanCardComponent('Ex laborum aute est esse ex sunt tempor laboris consectetur.')
  ];

  constructor() { }

  ngOnInit() {
  }

}
