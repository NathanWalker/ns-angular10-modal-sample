import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "ns-modal-cmp",
    templateUrl: `./modal.component.html`
})
export class ModalComponent {

  constructor(private params: ModalDialogParams) {

  }

  close() {
    this.params.closeCallback('Closed from button!');
  }
}
