public class NTT_BarChartController{
	
    @AuraEnabled
    public static String getAccountJSON(){
        
        List<Account> accountList = [SELECT Id, Type FROM Account limit 100 ];
        Map<String,Integer> mapType = new Map<String,Integer>();
        
        for(Account a : accountList)
        {
            if(mapType.containsKey(a.Type))
            {
                mapType.put(a.Type, mapType.get(a.Type) + 1 ) ;
            }else{
                mapType.put(a.Type, 1) ;        
            }
        }
        
        DataWrapper barData = new DataWrapper();
        for(String key : mapType.keySet())
        {
            barData.barLabels.add(key);
            barData.barData.add(mapType.get(key));
        }
        
        return System.json.serialize(barData);
    }
    
    /**
     * Wrapper class to serialize as JSON as return Value
     * */
    class DataWrapper
    {
       public List<String> barLabels {get;set;}
       public List<Integer> barData {get;set;}
        
        public DataWrapper(){
            barLabels = new List<String>();
            barData = new List<Integer>();
        }
    }
    
}