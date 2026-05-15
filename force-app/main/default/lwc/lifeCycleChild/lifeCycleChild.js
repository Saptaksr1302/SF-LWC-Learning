import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super();
        console.log('child constructor called');
    }

    // interval

    connectedCallback(){
        console.log('child connectedCallback called');
        // window.addEventListener('click', this.handleShow);
        // this.interval = window.setInterval();
        throw new Error('Loading of Child Component failed');
    }

    renderedCallback(){
        console.log("child renderedCallback called");
    }

    disconnectedCallback(){
        alert('Child disconnectedCallback called!!');
        // window.removeEventListener('click', this.handleShow);
        // window.clearInterval(this.interval);
    }
}