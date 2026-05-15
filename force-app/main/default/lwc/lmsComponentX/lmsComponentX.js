import { LightningElement, wire } from 'lwc';
import samplemsg from '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    
    receivedMessage
    subscription
    @wire(MessageContext)
    context
    
    connectedCallback(){
        this.subscribeMsg();
    }

    subscribeMsg(){
        this.subscription = subscribe(this.context, samplemsg, (message)=>{this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value : "No Message published";
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null;
    }
}