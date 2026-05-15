import { createElement } from 'lwc';
import LoopTestingDemo from 'c/loopTestingDemo';

const expectedArr = ['Saptak', 'Saurya', 'Rajat'];

describe('c-loop-testing-demo suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-loop-testing-demo', {
            is: LoopTestingDemo
        });
        document.body.appendChild(element);
    })

    test('Check User List Length', ()=>{
        const element = document.querySelector('c-loop-testing-demo');
        const userData = element.shadowRoot.querySelectorAll('.forEachList>li');
        expect(userData.length).toBe(3);
    })

    test('Check User Data', ()=>{
        const element = document.querySelector('c-loop-testing-demo');
        const userDetails = Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'));
        const userList = userDetails.map(item=>item.textContent);
        expect(userList).toEqual(expectedArr);
    })

    test('Displays First and Last text in the iterator loop', ()=>{
        const element = document.querySelector('c-loop-testing-demo');
        const firstText = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child');
        expect(firstText.textContent).toBe('Start of List');
        const lastText = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child');
        expect(lastText.textContent).toBe('End of List');
    })
})