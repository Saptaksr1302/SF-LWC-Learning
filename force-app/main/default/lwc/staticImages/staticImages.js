import { LightningElement } from 'lwc';
import USERS_IMAGE from '@salesforce/resourceUrl/usersImage';
import SYSTEM_ADMIN from '@salesforce/resourceUrl/systemAdmin';

export default class StaticImages extends LightningElement {

    userImage = USERS_IMAGE;

    systemAdmin = SYSTEM_ADMIN;
}