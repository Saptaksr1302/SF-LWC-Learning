public with sharing class AccountControllerTest {

    @auraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId){
        return [SELECT Id, Name, Phone FROM Account WHERE Id=:accId];
    }

    @auraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue!=null LIMIT 5];
    }
}