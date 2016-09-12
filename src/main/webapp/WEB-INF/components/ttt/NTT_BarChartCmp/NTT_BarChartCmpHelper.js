({
    setupBarChart : function(component) {
       
	var script = document.createElement("script");
		script.type = "application/javascript";
		script.src = '/scripts/Chart.bundle.js';
console.log('the script' +script);
				 var newCanvas = document.createElement("canvas");
             newCanvas.id = "sketcher";
			 newCanvas.style.border = "1px solid";
             document.body.appendChild(newCanvas);
			 console.log('the width of the canvas'+newCanvas.width);
			 console.log('the height of the canvas'+newCanvas.height);
			 console.log('the canvas element'+newCanvas);
			 console.log('the id of the canvas'+newCanvas.id);
			 document.head.appendChild(script);
		script.onload = function(){



			
			var ctx = document.getElementById('sketcher').getContext('2d');
	
	


	scatterChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
				
   //document.body.appendChild(newCanvas);
	scatterChart.render();	
		
    }
		
    
	
	console.log('the source of the script is'+script.src);
		
	}
                           
	
})