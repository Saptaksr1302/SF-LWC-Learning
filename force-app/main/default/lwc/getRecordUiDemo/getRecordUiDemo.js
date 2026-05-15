import { api, LightningElement, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUiDemo extends LightningElement {
    
    formFields = [
        {"fieldName": "AccountNumber", label: "Account Number"},
        {"fieldName": "Name", label: "Name"},
        {"fieldName": "AnnualRevenue", label: "Annual Revenue"},
        {"fieldName": "Phone", label: "Phone"},
    ]
    @api recordId;
    @wire(getRecordUi, {recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit'})
    accountRecordUiHandler({data, error}){
        if(data){
            console.log(data);
            this.formFields = this.formFields.map(item=>{
                return {...item, value: data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error);
        }
    }
}