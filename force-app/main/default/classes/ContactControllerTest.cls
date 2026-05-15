public with sharing class ContactControllerTest {
    @auraEnabled(cacheable=true)
    public static List<Contact> getContactLists(){
        return [SELECT NAME FROM Contact];
    }
}