import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class RecordEditCustomValidate extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    inputValue = "";

    handleChange(event){
        this.inputValue = event.target.value;
    }

    handleSubmit(event){
        event.preventDefault();
        const input = this.template.querySelector('lightning-input');
        const value = input.value;
        if(!value.includes('Dickinson')){
            input.setCustomValidity("The Account name must include Dickinson");
        } else{
            input.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        input.reportValidity();
    }

    successHandler(event){
        const toastEvent = new ShowToastEvent({
            title: 'Account Created',
            message:"Record Id: "+event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(toastEvent);
    }

    errorHandler(event){
        const toastEvent = new ShowToastEvent({
            title: 'Account Creation Error',
            message: event.detail.message,
            variant: 'error'
        })
        this.dispatchEvent(toastEvent);
    }
}