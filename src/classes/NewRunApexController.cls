//With sharing, allows to use users security policy
//You then enable Aura, so it is available to Lightning 
public class NewRunApexController {
@AuraEnabled
    public static Run__c newRunDB(Run__c run) {
  
        insert run;
        return run;
    }
}