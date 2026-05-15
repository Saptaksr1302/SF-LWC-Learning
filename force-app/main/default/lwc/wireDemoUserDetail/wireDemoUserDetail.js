import { LightningElement, wire } from 'lwc';
import ID from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';

const fields = [NAME_FIELD, EMAIL_FIELD];

export default class WireDemoUserDetail extends LightningElement {
    userDetail;
    userId = ID;

    //005HF000002a59rYAA
    // @wire(adapter, {adapterConfig})
    // propertyOrfunction

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({data, error}){
    //     console.log(response);
    //     let data = response.data;
    //     let error = response.error;
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailProperty
}