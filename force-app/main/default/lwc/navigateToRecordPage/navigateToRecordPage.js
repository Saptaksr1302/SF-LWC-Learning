import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    recordViewHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003HF00000AWNSDYA5',
                objectApiName:'Contact',
                actionName: 'view'
            }
        })
    }

    recordEditHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '003HF00000AWNSDYA5',
                objectApiName:'Contact',
                actionName: 'edit'
            }
        })
    }
}