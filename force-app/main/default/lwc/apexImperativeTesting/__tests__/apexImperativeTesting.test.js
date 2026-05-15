import { createElement } from 'lwc';
import ApexImperativeTesting from 'c/apexImperativeTesting';
import getAccountList from '@salesforce/apex/AccountControllerTest.getAccountList';

const accountList = require('./data/accountsList.json');
const errorList = require('./data/accountsError.json');

jest.mock('@salesforce/apex/AccountControllerTest.getAccountList', ()=>({
    default: jest.fn()
}),{virtual: true});

describe('c-apex-imperative-testing suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-apex-imperative-testing', {
            is: ApexImperativeTesting
        });
        document.body.appendChild(element);
    })

    test('renders accounts returned from imperative apex call', ()=>{
        getAccountList.mockResolvedValue(accountList);
        const element = document.querySelector('c-apex-imperative-testing');
        const btn = element.shadowRoot.querySelector('lightning-button');
        btn.click();
        return new Promise(setImmediate).then(()=>{
            const firstPara = element.shadowRoot.querySelectorAll('.firstPara');
            expect(firstPara.length).toEqual(accountList.length);
            expect(firstPara[0].textContent).toBe(accountList[0].Name);
        })
    })

    test('renders the error when apex method returns an error', ()=>{
        getAccountList.mockRejectedValue(errorList);
        const element = document.querySelector('c-apex-imperative-testing');
        const btn = element.shadowRoot.querySelector('lightning-button');
        btn.click();
        return new Promise(setImmediate).then(()=>{
            const err = element.shadowRoot.querySelector('.error');
            expect(err).not.toBeNull();
        })
    })
})