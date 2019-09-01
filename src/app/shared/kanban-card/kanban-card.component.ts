import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';
import { ModalController } from '@ionic/angular';
import { KanbanCardDetailPage } from 'src/app/page/kanban-card-detail/kanban-card-detail.page';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss'],
})
export class KanbanCardComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  @Input() card: KanbanCard

  ngOnInit() { }

  async presentDetailModal() {
    console.log('presenting');
    const modal = await this.modalController.create({
      component: KanbanCardDetailPage,
      componentProps: {
        'card': this.card
      }
    });
    return await modal.present();
  }

}
