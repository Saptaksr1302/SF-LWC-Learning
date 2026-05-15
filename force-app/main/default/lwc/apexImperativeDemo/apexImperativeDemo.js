import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexImperativeDemo extends LightningElement {
    
    accounts;
    clickHandler(){
        getAccountList().then(result=> {
            console.log(result);
            this.accounts = result;
        }).catch(error=>{
            console.error(error);
        })
    }
}