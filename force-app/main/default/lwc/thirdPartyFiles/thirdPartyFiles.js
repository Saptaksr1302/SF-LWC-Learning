import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate'; 
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';

export default class ThirdPartyFiles extends LightningElement {
    
    currentDate= '';
    isLibLoaded = false;

    renederedCallback(){
        if(this.isLibLoaded){
            return
        } else{
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT),
                console.log('Working')
            ]).then(()=>{
                console.log('Working');
                this.setDateOnScreen()
            }).catch(error=>{
                console.error(error)
            })

            this.isLibLoaded = true;
        }
    }

    setDateOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
}