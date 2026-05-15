import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';

export default class PageReference extends LightningElement {

    @wire(CurrentPageReference)
    PageRef

    get currentReference(){
        return this.PageRef ? JSON.stringify(this.PageRef, null, 2) : "";
    }
}