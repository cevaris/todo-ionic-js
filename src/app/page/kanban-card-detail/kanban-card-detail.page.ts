import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, kanbanStateFromString, KanbanState } from 'src/app/data/models/kanban-card';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {
  private cardForm: FormGroup;
  private card: KanbanCard;

  title: String
  description: String
  state: KanbanState

  constructor(
    private formBuilder: FormBuilder,
    navParams: NavParams,
    public modalController: ModalController
  ) {
    this.card = navParams.get('card');

    this.cardForm = this.formBuilder.group({
      title: [this.card.title, Validators.required],
      description: [this.card.description],
      state: [this.card.state],
    });
    

    console.log('caught', this.card);
  }

  ngOnInit() {
  }

  async submit(card) {
    await console.log('saving', card);
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
