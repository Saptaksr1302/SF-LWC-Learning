import {createElement} from 'lwc';
import HelloGreeting from 'c/helloGreeting';

describe('My First Component Test Suite', ()=>{
    test('Display First Greeting', ()=>{
        const element = createElement('c-hello-greeting', {
            is:HelloGreeting
        })
        document.body.appendChild(element);
        const firstDiv = element.shadowRoot.querySelector('div.first');
        expect(firstDiv.textContent).toBe('Hello, World!');
    })

    test('Display First Greeting', ()=>{
        const element = createElement('c-hello-greeting', {
            is:HelloGreeting
        })
        document.body.appendChild(element);
        const secondDiv = element.shadowRoot.querySelector('div.second');
        expect(secondDiv.textContent).toBe('My, World!');
    })
})