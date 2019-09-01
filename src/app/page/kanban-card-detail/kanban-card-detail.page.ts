import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {

  @Input() card: KanbanCard;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
