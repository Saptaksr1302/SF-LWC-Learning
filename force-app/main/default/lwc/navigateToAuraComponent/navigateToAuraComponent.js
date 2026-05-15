import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation';

export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToAuraHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: "c__AuraNavigation"
            },
            state: {
                "c__id": "hhgsfdseiocb%FddWWR"
            }
        })
    }
}