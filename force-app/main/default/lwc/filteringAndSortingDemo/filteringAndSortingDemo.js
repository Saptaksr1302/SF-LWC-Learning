import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/refreshContactController.getContactList';

export default class FilteringAndSortingDemo extends LightningElement {
    
    headings=["Id", "FirstName", "LastName", "Email"];
    fullTableData=[];
    filteredData=[];
    delayTime;
    filterBy = 'FirstName';
    sortedBy = 'FirstName';
    sortDirection = 'asc';
    @wire(getContactList)
    contactHandler({data, error}){
        if(data){
            console.log(data);
            this.fullTableData = data;
            this.filteredData = [...this.sortBy(data)];
        }
        if(error){
            console.error(error);
        }
    }

    get sortByOptions(){
        return [
            {label: 'Id', value: 'Id'},
            {label: 'FirstName', value: 'FirstName'},
            {label: 'LastName', value: 'LastName'},
            {label: 'Email', value: 'Email'}

        ]
    }

    get filterByOptions(){
        return [
            {label: 'All', value: 'All'},
            {label: 'Id', value: 'Id'},
            {label: 'FirstName', value: 'FirstName'},
            {label: 'LastName', value: 'LastName'},
            {label: 'Email', value: 'Email'}

        ]
    }

    filterByHandler(event){
        this.filterBy = event.target.value;
    }

    filterHandler(event){
        const {value} = event.target;
        console.log(value);
        window.clearTimeout(this.delayTime);
        if(value){
            this.delayTime = window.setTimeout(()=>{
                this.filteredData = this.fullTableData.filter(item=>{
                    if(this.filterBy === 'All'){
                        return Object.keys(item).some(key=>{
                        return item[key].toLowerCase().includes(value);
                    })
                    } else{
                        const val = item[this.filterBy] ? item[this.filterBy] : '';
                    return val.toLowerCase().includes(value);
                    }
                
                    // return Object.keys(item).some(key=>{
                    //     return item[key].toLowerCase().includes(value);
                    // })
                })
            }, 500)
        } else{
            this.filteredData=[...this.fullTableData];
        }
    }

    sortHandler(event){
        this.sortedBy = event.target.value;
        this.filteredData = [...this.sortBy(this.filteredData)];
    }

    sortBy(data){
        const cloneData = [...data];
        cloneData.sort((a, b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            return this.sortDirection === 'desc' ? a[this.sortedBy] > b[this.sortedBy] ? -1 : 1 : a[this.sortedBy] < b[this.sortedBy] ? -1 : 1;
        })
        return cloneData;
    }
}