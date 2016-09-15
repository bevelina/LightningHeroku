({
    updateRecord : function(component, event, helper){
         var account = event.getParam('account');
         var buttonClass = event.getParam('buttonClass');
         var buttonTimestamp = event.getParam('buttonTimestamp');
         console.log('Account: ' + account.type);
        
         if (account.type === 'Customer - Direct') {
            $A.util.addClass(buttonClass, 'customerDirectClass');
            console.log('Account type: ' + account.type);
            
        } else if (account.type === 'Customer - Channel') {
            console.log('Account type: ' + account.type);
            $A.util.addClass(buttonClass, 'customerChannelClass');
        }
            else if (account.type === 'Prospect') {
                console.log('Account type: ' + account.type);
            $A.util.addClass(buttonClass, 'prospectClass');
            }
         else if (account.type === 'Channel Partner/Reseller') {
             console.log('Account type: ' + account.type);
             $A.util.addClass(buttonClass, 'channelPartnerClass');
         }
         else if (account.type === 'Installation Partner') {      
             console.log('Account type: ' + account.type);
             $A.util.addClass(buttonClass, 'installationClass');
         }
         else if (account.type === 'Technology Partner') {
             console.log('Account type: ' + account.type);
             $A.util.addClass(buttonClass, 'technologyClass');
         
        } else {
            console.log('Account type: ' + account.type);
            console.log('The current account has no defined type');
        }
    },
	doInit : function(component, event, helper){
		var css = document.createElement("style");
		css.type = "text/css";
		css.src = '/scripts/salesforce-lightning-design-system-ltng.css';
		  document.head.appendChild(css);
	}
	
})