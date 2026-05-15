import { LightningElement } from 'lwc';

const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {

    searchQuery = 'Man';
    books=[];
    delayTime;
    connectedCallback(){
        this.fetchBookData();
    }

    fetchBookData(){
        fetch(BOOK_URL+this.searchQuery).then(response=>response.json()).then(data=>{
            console.log(data);
            this.books = data ? this.formatData(data) : [];
            console.log(this.books);
        }).catch(error=>console.error(error))
    }

    fetchBookhandler(event){
        this.searchQuery = event.target.value;
        window.clearTimeout(this.delayTime);
        this.delayTime = setTimeout(() => {
            this.fetchBookData();
        }, 2000);
    }

    formatData(data){
        let books = data.items.map(item=>{
            let id = item.id;
            let thumbnail = item.volumeInfo.imageLinks && (item.volumeInfo.imageLinks.smallThumbnail || item.volumeInfo.imageLinks.thumbnail);
            let title = item.volumeInfo.title;
            let publishedDate = item.volumeInfo.publishedDate;
            let averageRating = item.volumeInfo.averageRating || 'NA';

            return {id, thumbnail, title, publishedDate, averageRating};
        })

        return books;
    }
}