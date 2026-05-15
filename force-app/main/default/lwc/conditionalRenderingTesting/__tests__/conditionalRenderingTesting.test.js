import { createElement } from 'lwc';
import ConditionalRenderingTesting from 'c/conditionalRenderingTesting';

describe('c-conditional-rendering-testing suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-conditional-rendering-testing', {
            is: ConditionalRenderingTesting
        })
        document.body.appendChild(element);
    })
    
    it("Don't show the password", ()=>{
        const element = document.querySelector('c-conditional-rendering-testing');
        const pass = element.shadowRoot.querySelector('.userInfo');
        expect(pass.textContent).toBe('My Password is **********');
    })

    it('show user password when checkbox is checked', ()=>{
        const element = document.querySelector('c-conditional-rendering-testing');
        const inp = element.shadowRoot.querySelector('lightning-input');
        inp.checked = true;
        inp.dispatchEvent(new CustomEvent('change'));
    })
    return Promise.resolve().then(()=>{
        const pass = element.shadowRoot.querySelector('.userInfo');
        expect(pass.textContent).toBe('My Password is Saptak@123');
    })
})