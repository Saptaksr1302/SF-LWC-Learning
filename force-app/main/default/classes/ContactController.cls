public with sharing class ContactController {
    @auraEnabled(cacheable=true)
    public static List<contact> getContactsList(){
        return [SELECT Id, Name, Title, Email FROM Contact];
    }
}