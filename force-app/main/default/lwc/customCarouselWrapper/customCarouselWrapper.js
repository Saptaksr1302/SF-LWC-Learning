import { LightningElement } from 'lwc';
import CAROUSEL_IMAGES from '@salesforce/resourceUrl/Carousel_Image';

export default class CustomCarouselWrapper extends LightningElement {

    slides = [
        {
            image: `${CAROUSEL_IMAGES}/carousel/photo1.jpg`
        },
        {
            image: `${CAROUSEL_IMAGES}/carousel/photo2.jpg`
        },
        {
            image: `${CAROUSEL_IMAGES}/carousel/photo3.jpg`
        },
    ]
}