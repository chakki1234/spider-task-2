var body = document.querySelector("body");
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var right = document.querySelector("#right");
var left = document.querySelector("#left");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var playagain = document.querySelector("#playagain");
var body = document.querySelector("body");
var scorecount = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-150;

var radius = 80;
var radiussmall = 10;
var xc = canvas.width/2
var yc = canvas.height-100;
var i = 0;

var repeat = 0;

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
        	listblock[k].dy = 0.5;0
        	listblock[k].width = Math.random()*125 + 25;
        	listblock[k].height = Math.random()*25 + 25;
        	listblock[k].x = Math.random()*200 + canvas.width/2 - 150;
    
       }

var play = 1;
var touched = 0;


body.addEventListener("keydown", function(event){

 if(event.which==37)
 {
  angle-=(20*Math.PI/180);
   redx = xc+Math.cos(angle)*radius;
   redy = yc+Math.sin(angle)*radius;
   bluex = xc+Math.cos(Math.PI+angle)*radius;
   bluey = yc+Math.sin(Math.PI+angle)*radius;
 }

 if(event.which==39)
 {
        angle+=(20*Math.PI/180);
        redx = xc+Math.cos(angle)*radius;
        redy = yc+Math.sin(angle)*radius;
        bluex = xc+Math.cos(Math.PI+angle)*radius;
        bluey = yc+Math.sin(Math.PI+angle)*radius;
 }

});

playagain.addEventListener("click", function(){
 document.location.reload();
});


start.addEventListener("click", function(){
 play = 1;
});


stop.addEventListener("click", function(){
play = 0;
});


right.addEventListener("click" , function(){
	angle+=(20*Math.PI/180);
        redx = xc+Math.cos(angle)*radius;
        redy = yc+Math.sin(angle)*radius;
        bluex = xc+Math.cos(Math.PI+angle)*radius;
        bluey = yc+Math.sin(Math.PI+angle)*radius;
        

});

left.addEventListener("click", function(){
   
   angle-=(20*Math.PI/180);
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


            	 if(redx>=listblock[r].x-radiussmall && redx<=listblock[r].x+listblock[r].width+radiussmall && redy>=listblock[r].y && redy<=listblock[r].y+listblock[r].height)
                 {
                  
                  touched = 1;
                  /* break;
                  alert("game over");
                  document.location.reload();
                  clearInterval(interval);
                  */}

                 else if(bluex>=listblock[r].x-radiussmall && bluex<=listblock[r].x+listblock[r].width+radiussmall && bluey>=listblock[r].y && bluey<=listblock[r].y+listblock[r].height)
               
                {
                 
                  touched = 1;
                 }


                 else if(redy>=listblock[r].y-radiussmall && redy<=listblock[r].y+listblock[r].height+radiussmall && redx>=listblock[r].x && redx<=listblock[r].x+listblock[r].width)
                 {
                 	
                  touched = 1;
             
                 }

                 
                else if(bluey>=listblock[r].y-radiussmall && bluey<=listblock[r].y+listblock[r].height+radiussmall && bluex>=listblock[r].x && bluex<=listblock[r].x+listblock[r].width)
                 {
                   touched = 1;
                
                }

                /*else if(Math.sqrt( Math.pow(redx - listblock[r].x, 2) + Math.pow(redy - listblock[r].y, 2) )<=radiussmall)
                {
                	touched = 1;
                } 
                else if(Math.sqrt( Math.pow(redx - listblock[r].x + listblock[r].width, 2) + Math.pow(redy - listblock[r].y, 2) )<=radiussmall)
                {
                	touched = 1;
                }
                else if(Math.sqrt( Math.pow(redx - listblock[r].x, 2) + Math.pow(redy - listblock[r].y + listblock[r].height, 2) )<=radiussmall)
                {
                	touched = 1;
                }
                 else if(Math.sqrt( Math.pow(redx - listblock[r].x + listblock[r].width, 2) + Math.pow(redy - listblock[r].y + listblock[r].height, 2) )<=radiussmall)
                {
                	touched = 1;
                }*/
       
       
           }
           
 }

 function draw(){

 	 for(var i=0;i<4;++i)
        {   
            if(listblock[i].y>=canvas.height)
            {
            
            	listblock[i].y=sma-250;
            	listblock[i].width = Math.random()*125 + 25;
            	listblock[i].height = Math.random()*25 + 25;
            	listblock[i].x = Math.random()*200 + canvas.width/2 - 150;
            	listblock[i].dy = listblock[i].dy+0.001;
            	++scorecount;

            } 
                c.fillStyle = "black";
		        c.fillRect(listblock[i].x, listblock[i].y, listblock[i].width, listblock[i].height);
		      
		       
                 
        
          }
 }

function score(){
 
c.font = '50px serif';
c.fillStyle = "black";
c.fillText("Points scored : " + scorecount, 100, 100);
 
} 

function incrementy(){

 	for(var q=0;q<4;++q)
 	{
 		listblock[q].y+=listblock[q].dy;
 	}
 }

 function drawballs(){

        c.beginPath();
	    c.fillStyle = "red";
        c.arc(redx, redy, radiussmall, 0, Math.PI*2, false);
        c.fill();

        c.beginPath()
        c.fillStyle = "blue";
        c.arc(bluex, bluey, radiussmall, 0, Math.PI*2, false);
        c.fill();
        
 }


function animate()
{       
        if(touched==1 && repeat==0)
           	{
           	alert("game over");
            play=0;
            repeat = 1;
           }

	    if(play==1)
	   {

	    	
	    c.clearRect(0 , 0, canvas.width, canvas.height);
		c.beginPath();
		c.strokeStyle = "purple";
		c.arc(xc, yc, radius, 0, Math.PI*2, false);
		c.stroke();
	     

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

        score();
        
        drawballs();

        collisiondetect();

        incrementy();
 
   }
}


setInterval(animate, 1);

/*c.beginPath();
c.fillRect(canvas.width/2-150, 300, 150, 50 );

 c.beginPath();
		c.strokeStyle = "purple";
		c.arc(xc, yc, radius, 0, Math.PI*2, false);
		c.stroke();
        


        c.beginPath();
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


