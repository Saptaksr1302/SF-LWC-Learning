import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIRECTION from '@salesforce/i18n/dir';

export default class InternationalizationDemo extends LightningElement {
    
    dir = DIRECTION;
    // dir = 'rtl';
    number = 887366.98
    // formattedNmbr = new Intl.NumberFormat('ar-EG', {
    //     style: 'currency',
    //     currency: 'USD',
    //     currencyDisplay: 'symbol'
    // }).format(this.number);

    formattedNmbr = new Intl.NumberFormat(LOCALE, {
        style: 'currency',
        currency: CURRENCY,
        currencyDisplay: 'symbol'
    }).format(this.number);
}