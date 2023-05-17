var vibgyor = [];
vibgyor[0] = "#9400D3";
vibgyor[1] = "#4B0082";
vibgyor[2] = "#0000FF";
vibgyor[3] = "#00FF00";
vibgyor[4] = "#FFFF00";
vibgyor[5] = "#FF7F00";
vibgyor[6] = "#FF0000";


var count = 0;
const box1 = document.getElementById("box1");
setInterval(()=>
{
    console.log(vibgyor[count]);
    box1.style.backgroundColor = vibgyor[count];
    count = (count +1) % vibgyor.length;
}, 1000);
