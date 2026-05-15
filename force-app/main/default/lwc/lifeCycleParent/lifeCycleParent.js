import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super();
        console.log('parent constructor called');
    }

    connectedCallback(){
        console.log('parent connectedCallback called');
    }

    renderedCallback(){
        console.log("parent renderedCallback called");
    }

    name

    changeHandler(event){
        this.name = event.target.value;
    }

    isChildVisible = false;

    handleShow(){
        this.isChildVisible = !this.isChildVisible;
    }

    errorCallback(err, stack){
        console.log(err.message);
        console.log(stack);
    }
}