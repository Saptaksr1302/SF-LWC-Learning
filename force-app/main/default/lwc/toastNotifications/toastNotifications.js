import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastNotifications extends LightningElement {

    toastHandler(){
        this.showToast('Success', "{0} Toasted Successfully!! {1}", 'success');
    }

    toastErrorHandler(){
        this.showToast('Error!!', "This didn't work", 'error');
    }

    toastWarningHandler(){
        this.showToast("Warning!", "Password should have at least 8 characters", "warning");
    }

    toastInfoHandler(){
        this.showToast("Info:", "A new version is available to update", "info");
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'Salesforce', {
                    url: 'https://www.lightningdesignsystem.com',
                    label: 'Click to Visit'
                }
            ],
            mode: 'sticky'
        });

        this.dispatchEvent(event);
    }
}