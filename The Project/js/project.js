// Rajmatie Arjune : The Project 

(function(){
	
	function init(){
		var canvas = document.getElementsByTagName('canvas')[0];
		var c = canvas.getContext('2d');
		
		c.fillStyle = "black";
		c.font = 'normal 2.75em "Helvetica"';
		
		var text = "Welcome to GraphicsFlo. We're always Happy to see You! " ;
		var i=1;
		
		function draw(time){
			c.fillText(text.substr(0,i),70,170);
			if(time - animationStartTime > 80){
				animationStartTime = time;
				i++;
			}
			if(i <= text.length){
				requestAnimationFrame(draw);
				
				}
		
			}
		
		function start(){
			animationStartTime = window.performance.now();
			requestAnimationFrame(draw);
		}
		
			start();
	}
	
		 window.addEventListener('load',init,false);
	}());
	
	