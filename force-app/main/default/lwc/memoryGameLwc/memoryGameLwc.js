import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import FONT_AWESOME from '@salesforce/resourceUrl/fontAwesome';

export default class MemoryGameLwc extends LightningElement {
    
    openCards= [];
    count = 0;
    matchedCards = [];
    totalTime='00:00:00';
    timerRef;
    completeGame = false;
    isLibLoaded = false;
    cards=[
        {id:1, listClass: "card", type:'diamond',icon: 'fa fa-diamond'},
        {id:2, listClass: "card", type: 'plane', icon: 'fa fa-paper-plane-o'},
        {id:3, listClass: "card", type: 'anchor', icon: 'fa fa-anchor'},
        {id:4, listClass: "card", type: 'bolt', icon: 'fa fa-bolt'},
        {id:5, listClass: "card", type: 'cube', icon: 'fa fa-cube'},
        {id:6, listClass: "card", type: 'anchor', icon: 'fa fa-anchor'},
        {id:7, listClass: "card", type: 'leaf', icon: 'fa fa-leaf'},
        {id:8, listClass: "card", type: 'bicycle', icon: 'fa fa-bicycle'},
        {id:9, listClass: "card", type: 'diamond', icon: 'fa fa-diamond'},
        {id:10, listClass: "card", type: 'bomb', icon: 'fa fa-bomb'},
        {id:11, listClass: "card", type: 'leaf', icon: 'fa fa-leaf'},
        {id:12, listClass: "card", type: 'bomb', icon: 'fa fa-bomb'},
        {id:13, listClass: "card", type: 'bolt', icon: 'fa fa-bolt'},
        {id:14, listClass: "card", type: 'bicycle', icon: 'fa fa-bicycle'},
        {id:15, listClass: "card", type: 'plane', icon: 'fa fa-paper-plane-o'},
        {id:16, listClass: "card", type: 'cube', icon: 'fa fa-cube'}
    ];

    get gameRating(){
        let stars = this.count<12 ? [1,2,3] : this.moves = 15 ? [1,2] : [1];
        return this.matchedCards.length === 16 ? stars : [];
    }

    displayCard(event){
        let currentCard = event.target;
        currentCard.classList.add('open', 'show', 'disabled');
        this.openCards = this.openCards.concat(event.target);
        const len = this.openCards.length;
        if(len===2){
           this.count = this.count+1;
           if(this.count === 1){
            this.timer();
           }
           if(this.openCards[0].type === this.openCards[1].type){
            this.matchedCards = this.matchedCards.concat(this.openCards[0], this.openCards[1]);
            this.matched();
           } else{
            this.unMatched();
           }
        }
    }

    timer(){
        let strtTime = new Date();
        this.timerRef = setInterval(()=>{
            let diffTime = new Date().getTime() - strtTime.getTime();
            let d = Math.floor(diffTime/1000);
            let m = Math.floor(d % 3600 / 60);
            let s = Math.floor(d % 3600 % 60);
            const minDisplay = m > 0 ? m+(m===1 ? ' minute ' : ' minutes, ') : "";
            const secDisplay = s > 0 ? s+(s===1 ? ' second' : ' seconds') : "";
            this.totalTime = minDisplay + secDisplay;
        }, 1000);
    }

    resetHandler(){
        this.completeGame = false;
        this.openCards = [];
        this.matchedCards = [];
        this.totalTime = '00:00:00';
        this.count = 0;
        window.clearInterval(this.timerRef);
        let element = this.template.querySelectorAll('.card');
        Array.from(element).forEach(item=>{
            item.classList.remove('show', 'open', 'match', 'disabled');
        })

        let shuffleCards = [...this.cards];
        let counter = shuffleCards.length;
        while(counter>0){
            let index = Math.floor(Math.random()*counter);
            counter--;

            let temp = shuffleCards[counter];
            shuffleCards[counter] = shuffleCards[index];
            shuffleCards[index] = temp;
        }
        this.cards = [...shuffleCards];
    }

    matched(){
        this.openCards[0].classList.add('match', 'disabled');
        this.openCards[1].classList.add('match', 'disabled');
        this.openCards[0].classList.remove('show', 'open');
        this.openCards[1].classList.remove('show', 'open');
        this.openCards= [];
        if(this.matchedCards.length === 16){
            window.clearInterval(this.timerRef);
            this.completeGame = true;
        }
    }

    unMatched(){
        this.openCards[0].classList.add('unmatched');
        this.openCards[1].classList.add('unmatched');
        this.action('DISABLE');
        setTimeout(()=>{
            this.openCards[0].classList.remove('show', 'open', 'unmatched');
            this.openCards[1].classList.remove('show', 'open', 'unmatched');
            this.action('ENABLE');
            this.openCards= [];
        }, 1100)
    }

    action(action){
        let card = this.template.querySelectorAll('.card');
        Array.from(card).forEach(item=> {
            if(action=== 'ENABLE'){
                let isMatch = item.classList.contains('match');
                if(!isMatch){
                    item.classList.remove('disabled');
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled');
            }
        })
    }

    renderedCallback(){
        if(this.isLibLoaded){
            return
        } else{
            loadStyle(this, FONT_AWESOME+'/fontawesome/css/font-awesome.min.css').then(()=>{
                console.log('Loaded successfully');
            }).catch(error => {
                console.error(error);
            })

            this.isLibLoaded = true;
        }
        
    }
}