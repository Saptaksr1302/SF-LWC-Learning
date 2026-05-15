public with sharing class refreshContactController {
    @auraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [SELECT Id, FirstName, LastName, Email FROM Contact LIMIT 10];
    }
}