public with sharing class NTT_UpdateRecordsCtrl {

  @AuraEnabled
    public static List<String> getSObjectTypes(){
        Map<String, Schema.SObjectType> gd = Schema.getGlobalDescribe();
        Set<Schema.SObjectType> attachableTypes =  new Set<Schema.SObjectType>(Schema.SObjectType.attachment.fields.parentId.getReferenceTo());
        List<String> allValues = new List<String>();
        for(Schema.SObjectType type : gd.values()){
             String name = String.valueOf(type);
                 if(attachableTypes.contains(type) && !name.contains('__c') ){
                     allValues.add(name);
                 }
        }
        return allValues;

    }
    
    @AuraEnabled
        public static List<SObject> getObjectList(String objectType){
            List<SObject> records = Database.query('SELECT Id,Name FROM '+objectType);
            return records;
        }
      
   @AuraEnabled
    public static Account getAccountObject(String recordId) {
        Account[] allAccounts = [SELECT Id, Name, Type FROM Account WHERE Id = :recordId];
        if (allAccounts.size() > 0) {
            
            return allAccounts[0];
        } else {
			return null;
        }
    } 
}