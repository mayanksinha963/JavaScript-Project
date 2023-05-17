var vibgyor = [];
vibgyor[0] = "#9400D3";
vibgyor[1] = "#4B0082";
vibgyor[2] = "#0000FF";
vibgyor[3] = "#00FF00";
vibgyor[4] = "#FFFF00";
vibgyor[5] = "#FF7F00";
vibgyor[6] = "#FF0000";

const box = document.getElementById("box1");
var count=0;
var Interval;

function getColors()
{
    box.style.backgroundColor = vibgyor[count];
    count++;
    if(count === vibgyor.length)
    {
        clearInterval(Interval);
    }
}

Interval = setInterval(getColors, 1000);