import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class DeleteRecordDemo extends LightningElement {

    recordId;
    changeHandler(event){
        this.recordId = event.target.value;
    }

    deleteHandler(){
        deleteRecord(this.recordId).then(result=>{
            console.log(result);
            this.showToast("Success!!", "Record deleted successfully", "success");
        }).catch(error=>{
            console.error(error);
            this.showToast("Error!!!", "Error while deleting the record", "error");
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}