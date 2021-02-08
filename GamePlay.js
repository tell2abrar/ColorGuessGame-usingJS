var box=document.getElementsByClassName("box");
var h=document.getElementById('span');
var message=document.getElementById("message");
var heading=document.getElementById("h1");
var btn1=document.querySelector("#btn-1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var color=[];
var easyColor=[];
color_array(color,6);
var correct=color[correct_color(color)];
h.textContent=correct;
hard.classList.add("selected");

//Game Logic (By default)
gameplay(color);

 //For selecting randomly one color from color array
function correct_color(temp)
{
	return (Math.floor(Math.random()*temp.length));
}

//Generating Random Color in color array
function color_array(color,size)
{
	for(var i=0;i<size;++i)
	{
		color[i]="rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
	}
	return color;
}

//RESET BUTTON
btn1.addEventListener("click",function(){
	message.textContent="";
     color_array(color,6);
     correct=color[correct_color(color)];
    heading.style.backgroundColor="rgb(52, 104, 235)";
	btn1.textContent="NEW COLOR";
    if (box[3].style.display=="none") {
    	easyColor=color_array(easyColor,3);
    	correct=easyColor[correct_color(easyColor)];
    	// console.log("i'm in easy mode");
    	// console.log(correct+" = " +easyColor);
    	h.textContent=correct;
    	gameplay(easyColor);
    } else{
    	// console.log("i'm in hard mode");
    	gameplay(color);
    }
});


//EASY BUTTON
easy.addEventListener("click",function(){
	heading.style.backgroundColor="rgb(52, 104, 235)"
	message.textContent="";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	for(var i=3;i<6;++i)
	{
		box[i].style.display ="none" ;
	}
    easyColor=color_array(easyColor,3);
    correct=easyColor[correct_color(easyColor)];
    h.textContent=correct;
    gameplay(easyColor);
   
});


//HARD BUTTON
hard.addEventListener("click",function(){
	heading.style.backgroundColor="rgb(52, 104, 235)"
	message.textContent="";
	hard.classList.add("selected");
	easy.classList.remove("selected");

	for(var i=3;i<6;++i)
	{
		box[i].style.display ="block" ;
	}
	color=[];
    color_array(color,6);
    correct=color[correct_color(color)];
    h.textContent=correct;
    gameplay(color);
});



function gameplay(rang)
{	
	for(var i=0;i<rang.length;++i)
    {
	    box[i].style.backgroundColor=rang[i];
	    box[i].addEventListener("click",function(){
		if(this.style.backgroundColor==correct)
		  {
			 message.textContent="Correct  You Won!!!";
			 heading.style.backgroundColor=correct;
			 btn1.textContent="PLAY AGAIN";
			 for(var i=0;i<rang.length;++i)
			 {
			 	box[i].style.backgroundColor =correct;
			 }
		   }
		else
		{
			message.textContent="Incorrect";
			this.style.backgroundColor = 'black';
		}
	});
    }
}