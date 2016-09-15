({

    updateCSS : function(cmp, event, helper){    
        var recordId = cmp.get("v.recordId");
		console.log('the record id in the controller'+recordId);
        var firstButton = cmp.find("firstButton");
        
        console.log(recordId);
        var action = cmp.get("c.getAccountObject");
                
        action.setParams({ recordId : recordId});

        action.setCallback(cmp, function(response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                console.log('*-NTT serverResponses: ' + response.getReturnValue());
                var account = response.getReturnValue();
                var buttonClass = '';
                var type = '';
                var buttonTimestamp = new Date();
                var timestamp = buttonTimestamp.getMonth()+"-"  + buttonTimestamp.getDate()+"-"  + buttonTimestamp.getFullYear() + " " + buttonTimestamp.getHours()+ ":"+buttonTimestamp.getMinutes()+":"+buttonTimestamp.getSeconds();
                var rgb = "#FFFFFF";//white
				console.log('the first account type'+account.Type);
				console.log('the first account name'+account.name);
                if (account.type != null) {
                    if (account.type === 'Customer - Direct') {
                        $A.util.addClass(firstButton, 'customerDirectClass');
                        buttonClass = 'customerDirectClass';
                        console.log('the button class is:'+buttonClass);
                        type = 'Customer - Direct';
                        rgb = '#e10072';//magenta
                    } else if (account.type === 'Customer - Channel') {
                        $A.util.addClass(firstButton, 'customerChannelClass');
                        buttonClass = 'customerChannelClass';
                        console.log('the button class is:'+buttonClass);
                        type = 'Customer - Channel';
                        rgb = '#0C5EB0';//blue
                    } else if (account.type === 'Prospect') {
                        $A.util.addClass(firstButton, 'prospectClass');
                        buttonClass = 'prospectClass';
                        type = 'Prospect';
                        rgb = '#D55A35';//orange
                    } else if (account.type === 'Channel Partner/Reseller') {
                        $A.util.addClass(firstButton, 'channelPartnerClass');
                        buttonClass = 'channelPartnerClass';
                        type = 'Channel Partner/Reseller';
                        rgb = '#C44444';//red
                    }
                      else if (account.type === 'Installation Partner') {
                          $A.util.addClass(firstButton, 'installationPartnerClass');
                          buttonClass = 'installationPartnerClass';
                        type = 'Installation Partner';
                        rgb = '#003300';//dark green
                    }
                     else if (account.type === 'Technology Partner') {
                         $A.util.addClass(firstButton, 'technologyPartnerClass');
                        buttonClass = 'technologyPartnerClass';
          
                        type = 'Technology Partner';
                        rgb = '#ff9900';//orange
                    }
              else if (account.type === 'Other') {
                        buttonClass = '';
                        type = 'Other';
                        rgb = '#bbff33';//lime green
                    }
                }
                cmp.set("v.buttonTimestamp", timestamp);
                console.log('the timestamp is'+timestamp);
                cmp.set("v.typeText", type);
                cmp.set("v.rgbValueBackground", rgb);
                cmp.set("v.buttonClass", buttonClass);

    
                
                //event that is handled by CMP2 to updated the icon
                var updateRecordEvent = $A.get("e.ttt:NTT_UpdateRecordEvent");
                updateRecordEvent.setParams({account: account,
                                             buttonClass: buttonClass,
                                             buttonTimestamp : timestamp});
                updateRecordEvent.fire();

                
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
  
     getRecords: function(component){
		       
	var css = document.createElement("style");
		css.type = "text/css";
		css.src = '/scripts/salesforce-lightning-design-system-ltng.css';
		  document.head.appendChild(css);
  
        var action = component.get("c.getObjectList");
              
        action.setCallback(this, function(response){
            var state = response.getState();
                if (state === "SUCCESS") {
                    component.set("v.objects", response.getReturnValue());
                }
        });
        
        $A.enqueueAction(action);
        
    },
	
	 getRecordId: function(component){
        var selectedField = component.find("selectedObject");
        var selectedValue = selectedField.get("v.value");
        console.log(selectedValue);
		component.set("v.recordId",selectedValue);
	
    },
})