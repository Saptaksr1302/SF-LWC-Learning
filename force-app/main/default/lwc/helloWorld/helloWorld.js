import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname= "Zero to Hero"
    title= "LWC"

    changeHandler(event){
        this.title = event.target.value;
    }
    
    /**@track binding example */

    // @track address={
    //     city: 'Bangalore',
    //     pincode: 560066,
    //     country: 'India'
    // }

    // trackHandler(event){
    //     this.address.city = event.target.value;
    // }

    address={
        city: 'Bangalore',
        pincode: 560066,
        country: 'India'
    }

    trackHandler(event){
        this.address = {...this.address, "city": event.target.value};
    }

    /**getter example */

    users = ["Saptak", "Yoganand", "Rajat"];
    // this.userFirst = this.users[0];
    num1 = 20;
    num2 = 90;

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1*this.num2;
    }

    
    
}