const endDate = "22 May 2023 00:00 AM";

const inputs = document.getElementsByTagName("input");

document.getElementById("end-Date").innerHTML = endDate;

// document.querySelector('#end-Date').innerHTML = endDate

function clock()
{
    const end = new Date (endDate);
    const now = new Date();

    //coverting msec into sec
    const diff = (end- now)/1000;

    //convert into days
    // console.log(Math.floor(diff/86400));
    inputs[0].value = Math.floor(diff/86400);
    
    
    //converting time into hours
    inputs[1].value = Math.floor((diff/3600)%24);

    //converting time into minutes
    inputs[2].value = Math.floor(diff/60) % 60;

    //converting time into seconds
    inputs[3].value = Math.floor(diff % 60);


    // console.log(end);
    // console.log(now); 
    // console.log(diff);  

    

}

setInterval(() =>
{
    clock();
}, 1000);