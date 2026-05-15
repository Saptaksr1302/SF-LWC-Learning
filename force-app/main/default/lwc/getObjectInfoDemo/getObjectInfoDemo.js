import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import OPPORTUNITY from '@salesforce/schema/Opportunity';

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId;
    @wire(getObjectInfo, {objectApiName: ACCOUNT})
    objectInfoHandler({data, error}){
        if(data){
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getObjectInfo, {objectApiName: ACCOUNT})
    objectInfo
    
    objectApiNames = [ACCOUNT, OPPORTUNITY];
    objectInfos;
    @wire(getObjectInfos, {objectApiNames: '$objectApiNames'})
    objectInfosHandler({data, error}){
        if(data){
            console.log(data);
            this.objectInfos = data;
        }
        if(error){
            console.error(error);
        }
    }
}