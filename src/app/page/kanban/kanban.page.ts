import { Component, OnInit } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  cardsTodo: KanbanCard[] = [
    new KanbanCard('Ipsum anim ea duis dolore ut consequat exercitation sit ipsum.'),
    new KanbanCard('Sunt eiusmod ex officia laboris sunt eu amet velit minim ullamco in.'),
    new KanbanCard('Mollit labore consectetur minim sunt mollit exercitation velit commodo nisi minim aliquip amet in.')
  ];

  cardsInProgress = [
    new KanbanCard('Fugiat ex est quis ut id duis nostrud incididunt elit officia exercitation laborum.'),
    new KanbanCard('Voluptate excepteur id mollit dolor commodo pariatur est irure nostrud adipisicing duis enim.'),
    new KanbanCard('Veniam tempor eiusmod laboris nisi nisi do anim aliquip sint exercitation duis adipisicing.')
  ];

  cardsComplete = [
    new KanbanCard('Nostrud et exercitation exercitation dolore id eu sint duis aute fugiat sint.'),
    new KanbanCard('Dolor ad consectetur velit cupidatat deserunt ut elit reprehenderit veniam aliqua ea.'),
    new KanbanCard('Ex laborum aute est esse ex sunt tempor laboris consectetur.')
  ];

  constructor() { }

  ngOnInit() {
  }

}
