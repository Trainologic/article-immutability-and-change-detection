import { Component } from '@angular/core';
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: 'my-app',
    templateUrl: "./app.component.html",
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];

    constructor(private contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.changed.subscribe(contacts => {
            this.contacts = contacts;
        });

        this.contactService.loadAll();
    }

    change() {
        this.contactService.change();
    }
}
