import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControllerTest.getAccountList';

export default class ApexImperativeTesting extends LightningElement {
    
    accounts;
    error;
    loadAccountHandler(){
        getAccountList().then(result=>{
            this.accounts = result;
            this.error = null;
        }).catch(error=>{
            this.error = error;
            this.accounts = null;
        })
    }
}