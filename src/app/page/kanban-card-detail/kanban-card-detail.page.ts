import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard } from 'src/app/data/models/kanban-card';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {

  @Input() card: KanbanCard;

  constructor(navParams: NavParams, public modalController: ModalController) {
    this.card = navParams.get('card');
    console.log('caught', this.card);
  }

  ngOnInit() {
  }

  dismiss(event) {
    this.save(event);
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  save(event: any) {
    const newValue = event.target.value;
    switch (event.target.id) {
      case 'field-title':
        this.card.title = newValue;
        break;
      case 'field-description':
        this.card.description = newValue;
        break;
      case 'field-state':
        this.card.state = newValue;
        break;
      default:
        break;
    }
    console.log('saving', this.card);
  }

}
