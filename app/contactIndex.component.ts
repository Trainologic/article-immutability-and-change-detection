import {Component, Input} from '@angular/core';
import {Contact} from "./contact.service";

@Component({
    selector: 'contact-index',
    moduleId: module.id,
    templateUrl: "./contactIndex.component.html",
})
export class ContactIndexComponent {
    @Input() contacts: Contact[];
    private contactsVM: ContactViewModel[];

    ngOnChanges() {
        this.contactsVM = this.contacts ? this.contacts.map(c => Object.assign({}, c, {selected: false})) : [];
    }

    dump() {
        console.log(this.contactsVM);
    }
}

class ContactViewModel {
    id: number;
    name: string;
    selected: boolean;
}
