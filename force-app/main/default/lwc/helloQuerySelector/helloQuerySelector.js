import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {

    userList = ['Saptak', 'Yoganand', 'Rajat', 'Debabrata'];

    fetchDetailHandler(){
        const element = this.template.querySelector('h1');
        element.style.border = '1px solid red';
        console.log(element.innerText);

        const userItem = this.template.querySelectorAll('.name');
        Array.from(userItem).forEach(item => {
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        })

        //lwc:dom="manual"
        const childElement = this.template.querySelector('.child');
        childElement.innerHTML = '<p>It is a child element</p>';
    }

}