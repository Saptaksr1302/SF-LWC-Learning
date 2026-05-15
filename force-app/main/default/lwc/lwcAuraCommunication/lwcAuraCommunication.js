import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    @api title

    sendAura(){
        const event = new CustomEvent('sendmsg', {
            detail:{
                "msg": "hello from LWC"
            }
        });

        this.dispatchEvent(event);
    }
}