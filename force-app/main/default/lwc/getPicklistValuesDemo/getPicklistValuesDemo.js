import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class GetPicklistValuesDemo extends LightningElement {
    
    selectedIndustry = '';
    selectedType = '';
    industryOptions = [];
    typeOptions = [];

    @wire(getObjectInfo, {objectApiName: ACCOUNT})
    objectInfo

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    industryPicklistHandler({data,error}){
        if(data){
            console.log(data);
            this.industryOptions = [...this.generatePicklist(data)];
        }
        if(error){
            console.log(error);
        }
    }

    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    generatePicklist(data){
       return data.values.map(item=>({label: item.label, value: item.value}))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD})
    typePicklistHandler({data,error}){
        if(data){
            console.log(data);
            this.typeOptions = [...this.generatePicklist(data)];
        }
        if(error){
            console.log(error);
        }
    }

    handleTypeChange(event){
        this.selectedType = event.detail.value;
    }
}