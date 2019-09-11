import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KanbanCard } from 'src/app/data/models/kanban-card';
import { IKanbanCardService } from 'src/app/service/kanban-card.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private subscription: Subscription;

  cards: KanbanCard[]

  constructor(private service: IKanbanCardService) {
    this.subscription = this.service.observable()
      .subscribe((cards) => {
        this.cards = cards;
      });

    this.service.readAll();
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  onInput(event: any) {
    const query = event.target.value;
    console.log('fire', query);

    if (query && query.trim()) {
      this.service.filter(query);
    } else {
      this.service.readAll();
    }
  }
}
