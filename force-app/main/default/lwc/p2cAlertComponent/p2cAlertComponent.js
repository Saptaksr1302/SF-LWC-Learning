import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {

    @api message
    @api cardTitle
    @api number
    @api isValid
}