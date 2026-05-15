import { LightningElement, wire } from 'lwc';
import getContactLists from '@salesforce/apex/ContactControllerTest.getContactLists';

export default class WireComponentTesting extends LightningElement {

    @wire(getContactLists)
    contacts

    renderedCallback(){

        if(this.contacts && this.contacts.data){
            console.log(JSON.stringify(this.contacts.data));
        }
    }
}