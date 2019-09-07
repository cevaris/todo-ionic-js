import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, kanbanStateFromString } from 'src/app/data/models/kanban-card';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {

  card: KanbanCard;

  constructor(navParams: NavParams, public modalController: ModalController) {
    this.card = navParams.get('card');
    console.log('caught', this.card);
  }

  ngOnInit() {
  }

  async dismiss() {
    await console.log('saving', this.card);
    await this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateCardByTarget(target: HTMLTextAreaElement | HTMLInputElement) {
    const newValue = target.value

    if (target.classList.contains('field-title')) {
      this.card.title = newValue;
    }
    if (target.classList.contains('field-description')) {
      this.card.description = newValue;
    }
    if (target.classList.contains('field-state')) {
      this.card.state = kanbanStateFromString(newValue);
    }
  }

}
