import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.labelOne';
import DESCRIPTION_TWO from '@salesforce/label/c.labelTwo';

export default class CustomLabelsDemo extends LightningElement {

    LABELS = {
        desOne: DESCRIPTION_ONE,
        desTwo: DESCRIPTION_TWO
    }
}