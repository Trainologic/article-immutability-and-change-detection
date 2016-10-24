import {EventEmitter} from "@angular/core";

export class ContactService {
    private contacts: Contact[];

    public changed: EventEmitter<Contact[]>;

    constructor() {
        this.changed = new EventEmitter<Contact[]>();
    }

    loadAll() {
        if(!this.contacts) {
            this.contacts = [
                {id:1, name: "Ori"},
                {id:2, name: "Roni"},
            ];

            this.changed.emit(this.contacts);
        }
    }

    change() {
        const newContact = Object.assign({}, this.contacts[0], {name: "XXX"});
        const newContacts = this.contacts.concat([]);
        newContacts[0] = newContact;

        this.contacts = newContacts;

        this.changed.emit(this.contacts);
    }
}

export interface Contact {
    id: number;
    name: string;
}
