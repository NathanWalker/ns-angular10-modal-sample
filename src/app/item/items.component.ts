import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ModalDialogService } from "@nativescript/angular";
import { ModalComponent } from "../modal.component";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private vcRef: ViewContainerRef, private itemService: ItemService, private modalService: ModalDialogService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    openModal() {
      this.modalService.showModal(ModalComponent, {
        viewContainerRef: this.vcRef,
        // You can also enable this, but just keep in mind your modal component will need a way to close
        // fullscreen: true
      }).then(result => {
        console.log('Modal closed with: ', result || 'Gesture handling');
      });
    }
}
