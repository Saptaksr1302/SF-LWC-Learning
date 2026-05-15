import {createElement} from 'lwc';
import NestedChildComponent from 'c/nestedChildComponent';

const userData = {
    Name: 'Saptak',
    Id: '1'
};

const message = 'No User Data available';

describe('c-nested-child-component suite', ()=>{

    test('render name based on public property', ()=>{
        const element = createElement('c-nested-child-component', {
            is: NestedChildComponent
        });
        element.userDetail = userData;
        document.body.appendChild(element);
        const divElement = element.shadowRoot.querySelector('.userName');
        expect(divElement.textContent).toBe(userData.Name);
    })

    test('render message if user detail is not available', ()=>{
        const element = createElement('c-nested-child-component', {
            is: NestedChildComponent
        });
        document.body.appendChild(element);
        const para = element.shadowRoot.querySelector('p');
        expect(para.textContent).toBe(message);
    })
})