public class RunApexController {
@AuraEnabled
    public static Run__c updateRunDB(Run__c run) {
  
        update run;
        return run;
    }
}