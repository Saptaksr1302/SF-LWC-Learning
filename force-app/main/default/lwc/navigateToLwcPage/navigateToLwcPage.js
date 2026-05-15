import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToLwcPage extends NavigationMixin(LightningElement) {

    navigateToLwcHandler(){
        var definition = {
            componentDef: 'c:navigationLwcTarget',
            attributes: {
                recordId: 'assfgt54dn@4kkXU'
            }
        }
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: '/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }
}