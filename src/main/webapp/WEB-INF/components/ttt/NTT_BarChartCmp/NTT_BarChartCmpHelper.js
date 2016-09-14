({
    setupBarChart : function(component) {
       
	var script = document.createElement("script");
		script.type = "application/javascript";
		script.src = '/scripts/Chart.bundle.js';
console.log('the script' +script);
				 var newCanvas = document.createElement("canvas");
             newCanvas.id = "sketcher";
			 //newCanvas.style.border = "1px solid";
             document.body.appendChild(newCanvas);
			 console.log('the width of the canvas'+newCanvas.width);
			 console.log('the height of the canvas'+newCanvas.height);
			 console.log('the canvas element'+newCanvas);
			 console.log('the id of the canvas'+newCanvas.id);
			 document.body.appendChild(script);
			 var action = component.get("c.getAccountJSON");
			 action.setCallback(this, function(a){
            var jsonRetVal = JSON.parse(a.getReturnValue()); 
            console.log(jsonRetVal.barLabels);
		//script.onload = function(){
		
            	
			
				
	
            
			var ctx = document.getElementById('sketcher').getContext('2d');
			
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

	scatterChart = new Chart(ctx, {
    type: 'bar',
    data:barChartData,
    options: {
        scales: {
            xAxes: [{
                stacked:true
            }],
			yAxes:[{
				stacked:true
			}]
        }
    }
});
				
   //document.body.appendChild(newCanvas);
	scatterChart.render();	
		
    
				
	
		
		//}
	
			 });
$A.enqueueAction(action);			
 }        
	
})