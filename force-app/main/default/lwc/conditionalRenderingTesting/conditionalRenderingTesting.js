import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingTesting extends LightningElement {

    @track isVisible = false;

    changeHandler(event){
        this.isVisible = event.target.checked;
    }
}