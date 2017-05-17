public with sharing class ListRunsApexController {
@AuraEnabled
    public static List<Run__c> getRunsDB() {
       
        return [SELECT Id, Name, Date_Time__c, Location__c, 
                Attended__c, Type__c, Results__c FROM Run__c];
    }
}