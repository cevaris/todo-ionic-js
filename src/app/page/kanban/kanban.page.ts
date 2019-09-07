import { Component, OnInit } from '@angular/core';
import { KanbanCard, KanbanState } from 'src/app/data/models/kanban-card';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  cardsTodo: KanbanCard[] = [
    new KanbanCard('Ipsum anim ea duis dolore ut consequat exercitation sit ipsum.', KanbanState.TODO),
    new KanbanCard('Sunt eiusmod ex officia laboris sunt eu amet velit minim ullamco in.', KanbanState.TODO),
    new KanbanCard('Mollit labore consectetur minim sunt mollit exercitation velit commodo nisi minim aliquip amet in.', KanbanState.TODO),
    new KanbanCard('Lorem mollit ut est aliqua officia sunt officia eu anim.', KanbanState.TODO),
    new KanbanCard('Esse pariatur excepteur nostrud non excepteur sunt dolore consectetur aliqua.', KanbanState.TODO),
    new KanbanCard('Duis pariatur id commodo consectetur.', KanbanState.TODO)
  ];

  cardsInProgress = [
    new KanbanCard('Fugiat ex est quis ut id duis nostrud incididunt elit officia exercitation laborum.', KanbanState.IN_PROGRESS),
    new KanbanCard('Voluptate excepteur id mollit dolor commodo pariatur est irure nostrud adipisicing duis enim.', KanbanState.IN_PROGRESS),
    new KanbanCard('Veniam tempor eiusmod laboris nisi nisi do anim aliquip sint exercitation duis adipisicing.', KanbanState.IN_PROGRESS)
  ];

  cardsComplete = [
    new KanbanCard('Nostrud et exercitation exercitation dolore id eu sint duis aute fugiat sint.', KanbanState.COMPLETE),
    new KanbanCard('Dolor ad consectetur velit cupidatat deserunt ut elit reprehenderit veniam aliqua ea.', KanbanState.COMPLETE),
    new KanbanCard('Ex laborum aute est esse ex sunt tempor laboris consectetur.', KanbanState.COMPLETE)
  ];

  constructor() { }

  ngOnInit() {
  }

}
