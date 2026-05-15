import { api, LightningElement } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF';

export default class PdfGenerationDemo extends LightningElement {
    
    @api recordId;
    imageUrl = 'https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png'; 
    invoiceData = {
        invoiceNo: '0876',
        invoiceCreated: 'October 12, 2024',
        invoiceDue: 'October 31, 2024',
        companyName: 'Capgemini',
        address1: 'Ecospace, Bangalore, Karnataka-560103',
        address2: 'Whitefield, Bangalore, Karnataka-560066'
    }
    clientData={
        client: 'Acme Corp',
        username: 'Arthur Jones',
        email: 'arthur.jones@acmecorp.com'
    }
    services= [
        {name: 'Consultation Fee', amount: 1000},
        {name: 'Website Design', amount: 6000},
        {name: 'Cloud Service', amount: 8000}
    ]

    get totalAmount(){
        return this.services.reduce((total, service)=>{
            return total = total+service.amount;
        }, 0)
    }

    pdfHandler(){
        let content = this.template.querySelector('.container');
        console.log(content.outerHTML);
        generatePDF({recordId: this.recordId, htmlData: content.outerHTML}).then(result=>{
            console.log("Attachment Id: ", result);
            window.open(`https://force-computing-7103-dev-ed.scratch.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`);
        }).catch(error=>{
            console.error(error);
        });
    }
}