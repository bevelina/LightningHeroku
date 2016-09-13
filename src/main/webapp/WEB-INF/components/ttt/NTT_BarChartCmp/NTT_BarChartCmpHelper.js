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
	
	
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55, 40],
        }
    ]
};

	scatterChart = new Chart(ctx, {
    type: 'bar',
    data:data,
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
		
    }
		
    
	
	console.log('the source of the script is'+script.src);
		
	}
                           
	
})