import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';

const cols = [
    {label: "First Name", fieldName: "FirstName", editable: true},
    {label: "Last Name", fieldName: "LastName", editable: true},
    {label: "Email", fieldName: "Email", type: 'email'}
]

export default class RefreshDemoLwc extends LightningElement {

    columns = cols;
    draftValues = [];
    // contactRes = null;
    @wire(getContactList)
    contact;

    // @wire(getContactList)
    // contactListHandler(result){
    //     contactRes = result;
    //     const {data, value} = result;
    // }

    // get isContactAvailable(){
    //     console.log(JSON.stringify(this.contact));
    //     return this.contact && this.contact.data && this.contact.data.length > 0 ? 'Yes' : 'No'
    // }

    saveHandler(event){
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft=>{
            const fields = Object.assign({}, draft);
            return {fields}
        });
        console.log(recordInputs);

        const promises = recordInputs.map(inp=>updateRecord(inp));

        Promise.all(promises).then(result=>{
           this.showToast('Success!!', 'Contacts updated successfully');
           this.draftValues=[];
           return refreshApex(this.contact);
        }).catch(error=>{
            this.showToast('Error!!!', 'Error while updating record', 'error');
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant : variant || 'success'
        }))
    }
}