var Mouse_event = "empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color= "red";
Radius= 25;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
Mouse_event = "mousedown";
color = document.getElementById("Color_input").value;
Radius = document.getElementById("Radius_input").value;
console.log("mousedown");
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
Mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
Mouse_event = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    console.log(e);
    current_position_x= e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY- canvas.offsetTop;
    if (Mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineRadius=Radius;
        ctx.arc(current_position_x,current_position_y,Radius,0,2*Math.PI);
        console.log("x="+current_position_x+"y="+current_position_y);
        ctx.stroke();
    }

    last_position_x=current_position_x;
    last_position_y=current_position_y;
    }
