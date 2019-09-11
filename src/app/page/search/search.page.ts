import { Component, OnInit } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  cards: KanbanCard[]

  constructor() { }

  ngOnInit() {
  }

  onInput(event: any) {
    console.log(event.target.value);
  }
}
