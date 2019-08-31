import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
})
export class KanbanCardComponent implements OnInit {

  @Input() card: KanbanCard

  ngOnInit() { }

}
