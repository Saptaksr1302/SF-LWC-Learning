import { LightningElement, wire } from 'lwc';
import samplemsg from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {

    inputValue

    @wire(MessageContext)
    context

    inputHandler(event){
        this.inputValue = event.target.value;
    }

    publishMessageHandler(){
        const message = {
            lmsData: {
                value: this.inputValue
            }
        }
        publish(this.context, samplemsg, message)
    }
}