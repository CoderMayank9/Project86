var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
{
cardobject = Img;
cardobject.scaleToWidth(700);
cardobject.scaleToHeight(510);
cardobject.set({
top:0,
left:0   
});
canvas.add(cardobject);
});	
	
}

function playSound(){
x.play();	
}
