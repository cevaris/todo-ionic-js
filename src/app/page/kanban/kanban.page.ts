import { Component, OnInit } from '@angular/core';
import { KanbanCard, KanbanState, newKanbanCard } from 'src/app/data/models/kanban-card';
import { ModalController } from '@ionic/angular';
import { KanbanCardDetailPage } from '../kanban-card-detail/kanban-card-detail.page';
import { IKanbanCardService } from 'src/app/service/kanban-card.service';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  cardsTodo$: Observable<KanbanCard[]>;
  cardsInProgress$: Observable<KanbanCard[]>;
  cardsComplete$: Observable<KanbanCard[]>;

  constructor(
    private service: IKanbanCardService,
    public modalController: ModalController,
  ) {
    const cards$: Observable<KanbanCard[]> = service.get()

    this.cardsTodo$ = cards$.pipe(
      map((cards: KanbanCard[]) => cards.filter(card => card.state === KanbanState.TODO))
    );

    this.cardsInProgress$ = cards$.pipe(
      map((cards: KanbanCard[]) => cards.filter(card => card.state === KanbanState.IN_PROGRESS))
    );

    this.cardsComplete$ = cards$.pipe(
      map((cards: KanbanCard[]) => cards.filter(card => card.state === KanbanState.COMPLETE))
    );
  }

  ngOnInit() {
  }

  async newCard() {
    console.log('clicked newCard');

    const modal: HTMLIonModalElement =
      await this.modalController.create({
        component: KanbanCardDetailPage,
        componentProps: {
          card: newKanbanCard()
        }
      });

    await modal.present();
  }

}
