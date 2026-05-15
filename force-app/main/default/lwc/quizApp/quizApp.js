import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    get allNotSelected(){
        return !(Object.keys(this.selectedAns).length === this.quizQuestions.length);
    }

    get isScoredFull(){
        return `slds-text-heading_large ${this.quizQuestions.length === this.allCorrectAns ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    quizQuestions = [
        {
            id: "Question 1",
            question: "Which one of the following is a template loop?",
            answers:{
                a: "iterator",
                b: "map loop",
                c: "if:true",
                d: "@get"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 2",
            question: "Which one of the file is invalid in LWC component folder?",
            answers:{
                a: ".svg",
                b: ".xml",
                c: ".html",
                d: ".apxc"
            },
            correctAnswer: "d"
        },
        {
            id: "Question 3",
            question: "Which one of the following is not a directive?",
            answers:{
                a: "for-each",
                b: "if:true",
                c: "@track",
                d: "if:false"
            },
            correctAnswer: "c"
        }
    ];

    selectedAns = {};

    allCorrectAns = 0;

    isSubmitted = false;

    changeHandler(event){
        console.log("name", event.target.name);
        console.log("value", event.target.value);
        const {name, value} = event.target;
        this.selectedAns = {...this.selectedAns, [name]: value};
    }

    submitHandler(event){
        event.preventDefault();
        let correct = this.quizQuestions.filter(item=>this.selectedAns[item.id] === item.correctAnswer);
        this.allCorrectAns = correct.length;
        this.isSubmitted = true;
        console.log("Correct answer is: ", this.allCorrectAns);
    }

    resetHandler(){
        this.selectedAns= {};
        this.allCorrectAns = 0;
        this.isSubmitted = false;
    }
}