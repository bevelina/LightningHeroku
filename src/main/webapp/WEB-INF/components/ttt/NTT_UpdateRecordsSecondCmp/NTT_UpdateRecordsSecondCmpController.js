({
    updateRecord : function(component, event, helper){
         var account = event.getParam('account');
         var buttonClass = event.getParam('buttonClass');
         var buttonTimestamp = event.getParam('buttonTimestamp');
         console.log('Account: ' + account.type);
        
         if (account.Type === 'Customer - Direct') {
            $A.util.addClass(buttonClass, 'customerDirectClass');
            console.log('Account type: ' + account.Type);
            
        } else if (account.Type === 'Customer - Channel') {
            console.log('Account type: ' + account.Type);
            $A.util.addClass(buttonClass, 'customerChannelClass');
        }
            else if (account.Type === 'Prospect') {
                console.log('Account type: ' + account.Type);
            $A.util.addClass(buttonClass, 'prospectClass');
            }
         else if (account.Type === 'Channel Partner/Reseller') {
             console.log('Account type: ' + account.Type);
             $A.util.addClass(buttonClass, 'channelPartnerClass');
         }
         else if (account.Type === 'Installation Partner') {      
             console.log('Account type: ' + account.Type);
             $A.util.addClass(buttonClass, 'installationClass');
         }
         else if (account.Type === 'Technology Partner') {
             console.log('Account type: ' + account.Type);
             $A.util.addClass(buttonClass, 'technologyClass');
         
        } else {
            console.log('Account type: ' + account.Type);
            console.log('The current account has no defined type');
        }
    }
})