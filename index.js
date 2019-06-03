var body = document.querySelector("body");
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var right = document.querySelector("#right");
var left = document.querySelector("#left");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-150;

var radius = 80;
var radiussmall = 10;
var xc = canvas.width/2
var yc = canvas.height-100;
var i = 0;

var angle=Math.PI/180;
var redx = xc+radius;
var redy = yc;
var bluex = xc-radius ;
var bluey = yc;


var listblock = [];
var sma = canvas.height;

        for(var k=0;k<4;++k)
        {
        	listblock[k] = new Object();

        	listblock[k].y = 0-150*k;
        	listblock[k].dy = 0.2;
        	listblock[k].width = Math.random()*100;
        	listblock[k].height = Math.random()*100;
        	listblock[k].x = Math.random()*canvas.width;
    
       }




right.addEventListener("click" , function(){
	angle+=(7*Math.PI/180);
        redx = xc+Math.cos(angle)*radius;
        redy = yc+Math.sin(angle)*radius;
        bluex = xc+Math.cos(Math.PI+angle)*radius;
        bluey = yc+Math.sin(Math.PI+angle)*radius;
        

});

left.addEventListener("click", function(){
   
   angle-=(7*Math.PI/180);
   redx = xc+Math.cos(angle)*radius;
   redy = yc+Math.sin(angle)*radius;
   bluex = xc+Math.cos(Math.PI+angle)*radius;
   bluey = yc+Math.sin(Math.PI+angle)*radius;

});



function findsmall(){

	 sma = canvas.height;

        for(var p=0;p<4;++p)
        {
        	if(listblock[p].y<sma)
           	sma = listblock[p].y;

        }


      }


 function collisiondetect() {

           for(var r=0;r<4;++r)
           {


            	 if(redx>=listblock[r].x && redx<=listblock[r].x+listblock[r].width && redy>=listblock[r].y && redy<=listblock[r].y+listblock[r].height)
                 {
                 console.log("game over");
                 break;
                 /*alert("game over");
                 document.location.reload();
                 clearInterval(interval);
                 */}

                 if(bluex>=listblock[r].x && bluex<=listblock[r].x+listblock[r].width && bluey>=listblock[r].y && bluey<=listblock[r].y+listblock[r].height)
                {
                 console.log("game over");
                 break;
                 /*alert("game over");
               document.location.reload();
                 clearInterval(interval);
                 */}

/*
                  if((redy+radiussmall>=listblock[r].y && redy-radiussmall<=listblock[r].y+listblock[r].height) && (redx>=listblock[r].x && redx<=listblock[r].x+listblock[r].width))
                 {
                 console.log("game over");	
                 alert("game over");
                 break();
                 document.location.reload();
                 clearInterval(interval);
                 }

                 
                if((bluey+radiussmall>=listblock[r].y && bluey-radiussmall<=listblock[r].y+listblock[r].height) && (bluex>=listblock[r].x && bluex<=listblock[r].x+listblock[r].width))
                 {
                 console.log("game over");
                 alert("game over");
                 document.location.reload();
                 clearInterval(interval);
                 }*/

            }


 }

 function draw(){

 	 for(var i=0;i<4;++i)
        {   
            if(listblock[i].y>=canvas.height)
            {
            
            	listblock[i].y=sma-250;
            	listblock[i].width = Math.random()*100;
            	listblock[i].height = Math.random()*100;
            	listblock[i].x = Math.random()*canvas.width;
            	listblock[i].dy = listblock[i].dy+0.001;
            } 
          
		        c.fillRect(canvas.width/2, listblock[i].y, listblock[i].width, listblock[i].height);
		       
                 
        
          }
 }

 function incrementy(){

 	for(var q=0;q<4;++q)
 	{
 		listblock[q].y+=listblock[q].dy;
 	}
 }


function animate()
{       
	    
	    c.clearRect(0 , 0, canvas.width, canvas.height);
		c.beginPath();
		c.strokeStyle = "purple";
		c.arc(xc, yc, radius, 0, Math.PI*2, false);
		c.stroke();
	     

        c.beginPath();
	    c.fillStyle = "red";
        c.arc(redx, redy, radiussmall, 0, Math.PI*2, false);
        c.fill();

        c.beginPath()
        c.fillStyle = "blue";
        c.arc(bluex, bluey, radiussmall, 0, Math.PI*2, false);
        c.fill();
        
        /*c.beginPath();
        c.save();
        c.translate(xc, yc);
        c.rotate(angle);

        c.fillStyle = "red";
        c.arc(radius, 0, radiussmall, 0, Math.PI*2, false);
        c.fill();
       

        c.beginPath();
        c.fillStyle = "blue";
        c.arc(-radius, 0, radiussmall, 0, Math.PI*2, false);
        c.fill();
        

        c.restore();
        */


        findsmall();

        draw();

        collisiondetect();

        incrementy();
 
 }

setInterval(animate, 1);