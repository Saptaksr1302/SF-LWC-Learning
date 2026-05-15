import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';

export default class ApexImperativeWithParamsDemo extends LightningElement {
    
    delayTime;
    accounts;
    searchKey;
    searchHandler(event){
        window.clearTimeout(this.delayTime);
        this.searchKey = event.target.value;
        this.delayTime = setTimeout(() => {
            this.callApex();
        }, 2000);
    }

    callApex(){
        findAccounts({searchKey: this.searchKey}).then(result=>{
            this.accounts = result;
        }).catch(error=>{
            console.error(error);
        })
    }
}