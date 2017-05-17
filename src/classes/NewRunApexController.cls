//Keep security with sharing
public with sharing class  NewRunApexController {
@AuraEnabled
    public static Run__c newRunDB(Run__c run) {
  
        insert run;
        return run;
    }
}