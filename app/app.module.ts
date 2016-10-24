import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ContactIndexComponent} from "./contactIndex.component";
import {ContactService} from "./contact.service";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ContactIndexComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ ContactService ]
})
export class AppModule { }
