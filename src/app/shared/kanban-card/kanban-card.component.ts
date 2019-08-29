import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
})
export class KanbanCardComponent implements OnInit {

  title: String

  constructor(title: string) {
    this.title = title;
  }

  ngOnInit() { }

}
