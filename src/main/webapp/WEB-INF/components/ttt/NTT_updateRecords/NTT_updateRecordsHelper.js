({
	 getOptions : function(component){
        var action = component.get("c.getSObjectTypes");
        action.setCallback(this, function(response){
            var state = response.getState();
                if(state==="SUCCESS"){
                    component.set("v.standardObjectOptions", response.getReturnValue());
                    console.log(response.getReturnValue());
                }       
        });        
        $A.enqueueAction(action);
    },
})