import { createElement } from 'lwc';
import WireComponentTesting from 'c/wireComponentTesting';
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest';
import getContactLists from '@salesforce/apex/ContactControllerTest.getContactLists';


const contactList = require('./data/contactList.json');
const emptyList = require('./data/emptyList.json');

const contactListAdapter = registerApexTestWireAdapter(getContactLists)
describe('c-wire-component-testing suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-wire-component-testing', {
            is: WireComponentTesting
        });
        document.body.appendChild(element);
    })

    afterEach(()=>{
        jest.clearAllMocks();
    })

    test('renders contact records', ()=>{
        const element = document.querySelector('c-wire-component-testing');
        contactListAdapter.emit(contactList);
        return Promise.resolve().then(()=>{
            const para = element.shadowRoot.querySelectorAll('p');
            expect(para.length).toEqual(contactList.length);
            expect(para[0].textContent).toBe(contactList[0].Name);
        })
    })

    test('renders no item when no record is available', ()=>{
        const element = document.querySelector('c-wire-component-testing');
        contactListAdapter.emit(emptyList);
        return Promise.resolve().then(()=>{
            const para = element.shadowRoot.querySelectorAll('p');
            expect(para.length).toEqual(emptyList.length);
        })
    })

    test('getContactLists @wire error', ()=>{
        const element = document.querySelector('c-wire-component-testing');
        contactListAdapter.error();
        return Promise.resolve().then(()=>{
            const err = element.shadowRoot.querySelector('.error');
            expect(err.textContent).not.toBeNull();
        })
    })
})