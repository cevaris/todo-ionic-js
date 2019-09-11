import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { KanbanCard, KanbanState, newKanbanCard } from 'src/app/data/models/kanban-card';
import { IKanbanCardService } from 'src/app/service/kanban-card.service';
import { KanbanCardDetailPage } from '../kanban-card-detail/kanban-card-detail.page';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.page.html',
  styleUrls: ['./kanban.page.scss'],
})
export class KanbanPage implements OnInit {

  private subscription: Subscription;

  cardsTodo: KanbanCard[];
  cardsInProgress: KanbanCard[];
  cardsComplete: KanbanCard[];

  constructor(
    private service: IKanbanCardService,
    public modalController: ModalController,
  ) {
    this.subscription = this.service.observable()
      .subscribe((cards) => {
        this.cardsTodo = cards.filter(card => card.state === KanbanState.TODO);
        this.cardsInProgress = cards.filter(card => card.state === KanbanState.IN_PROGRESS);
        this.cardsComplete = cards.filter(card => card.state === KanbanState.COMPLETE);
      });

    this.service.readAll();
  }

  ngOnInit() {
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
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
