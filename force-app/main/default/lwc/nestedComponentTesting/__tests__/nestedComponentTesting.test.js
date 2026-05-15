import { createElement } from 'lwc';
import NestedComponentTesting from 'c/nestedComponentTesting';

const userName = 'Saptak';

describe('c-nested-component-testing suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-nested-component-testing', {
            is: NestedComponentTesting
        });
        document.body.appendChild(element);
    })

    test('render child component', ()=>{
        const element = document.querySelector('c-nested-component-testing');
        const childComp = element.shadowRoot.querySelectorAll('c-nested-child-component');
        expect(childComp.length).toEqual(1);
    })

    test('set user data property correctly', ()=>{
        const element = document.querySelector('c-nested-component-testing');
        const childComp = element.shadowRoot.querySelector('c-nested-child-component');
        expect(childComp.userDetail.Name).toBe(userName);
    })
})