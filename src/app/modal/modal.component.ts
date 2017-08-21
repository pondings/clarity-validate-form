import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public opened = false;

  constructor() { }

  ngOnInit() {
  }

  public openModal() {
    this.opened = true;
  }

  public closeModal() {
    this.opened = false;
  }

}
