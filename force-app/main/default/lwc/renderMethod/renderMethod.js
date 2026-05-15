import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {

    render(){
        return this.selectedBtn === 'Sign Up' ? signUpTemplate : this.selectedBtn === 'Sign In' ? signInTemplate : renderMethod;
    }

    selectedBtn = '';

    handleClick(event){
        this.selectedBtn = event.target.label;
    }

    submitHandler(){
        console.log(`${event.target.label} Successfully`);
    }

    signUpHandler(){
        console.log(`${event.target.label} Successfully`);
    }
}