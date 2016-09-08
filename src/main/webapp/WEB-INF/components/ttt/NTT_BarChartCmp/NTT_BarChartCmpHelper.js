({
    setupBarChart : function(component) {
        
        var action = component.get("c.getAccountJSON");
        action.setCallback(this, function(a){
            var jsonRetVal = JSON.parse(a.getReturnValue()); 
            console.log(jsonRetVal.barLabels);
            
            var barChartData = {
			labels: jsonRetVal.barLabels,
			datasets: [
                { 
                    fillColor : "#00ff00",
                    strokeColor: "#004d00",
                    pointColor: "#00cc00",
                    pointStrokeColor: "#194d19",
                    pointHighlightFill: "#194d19",
                    pointHighlightStroke: "#1aff1a",
                    data: jsonRetVal.barData
                }
            ]
        };
      
        var el = component.find('barChart').getElement();
        var ctx = el.getContext('2d');
        new Chart(ctx).Bar(barChartData);
        });
        $A.enqueueAction(action); 
    }
                           
	
})