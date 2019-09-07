import { Component, OnInit, Input } from '@angular/core';
import { KanbanCard, kanbanStateFromString, KanbanState } from 'src/app/data/models/kanban-card';
import { ModalController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kanban-card-detail',
  templateUrl: './kanban-card-detail.page.html',
  styleUrls: ['./kanban-card-detail.page.scss'],
})
export class KanbanCardDetailPage implements OnInit {
  private card: KanbanCard;

  title: String
  description: String
  state: KanbanState

  cardForm: FormGroup;
  validation_messages = {
    title: [
      { type: 'required', message: 'Title is required.' },
    ],
    description: [
      { type: 'required', message: 'Description is required.' },
    ],
  }

  constructor(
    private formBuilder: FormBuilder,
    navParams: NavParams,
    public modalController: ModalController
  ) {
    this.card = navParams.get('card');
    this.cardForm = this.formBuilder.group({
      title: new FormControl(this.card.title, Validators.required),
      description: new FormControl(this.card.description, Validators.required),
      state: new FormControl(this.card.state, Validators.required)
    });

    console.log('caught', this.card);
  }

  ngOnInit() {
  }

  async submit(card) {
    await console.log('saving', card);
    await this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateEditor(event) {
    console.log(event);
    if (event && event.target) {
      var element = event.target;
      element.style.height = element.scrollHeight + "px";
    }

  };
}
