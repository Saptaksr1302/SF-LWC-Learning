import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapControllerLwc.getAccounts';

export default class MapsInLwcDemo extends LightningElement {

    mapMarker=[];
    markersTitle='Accounts Location';
    @wire(getAccounts)
    accountHandler({data, error}){
        if(data){
            console.log(data);
            this.formatResponse(data);
        }
        if(error){
            console.error(error);
        }
    }

    formatResponse(data){
        this.mapMarker = data.map(item=>{
            return {
                location: {
                    Street: item.BillingCity || '',
                    City: item.BillingCity || '',
                    PostalCode: item.BillingPostalCode || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || ''
                },
                icon: 'utlity:salesforce1',
                title: item.Name,
                value: item.Name,
                description: item.description
            }
        })
        this.selectedMarker = this.mapMarker.length && this.mapMarker[0].value;
    }

    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue;
    }
}