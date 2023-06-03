

const CPU = ["S", "W", "G"];
let remaining = 9;
let win = 0;
let loose = 0;

function run() {
    if(remaining == 0)
    {
        const front = document.getElementById('front');
        front.style.display= "none";
        const score = document.getElementById('score');
        score.style.display = "inline";
        const winner = document.getElementById('winner');
        if(win > loose)
        {
            winner.innerHTML = "You win the game";
        }
        else if (win < loose)
        {
            winner.innerHTML = "You loose the game";
        }
        else{
            winner.innerHTML= "Game is tied";
        }
    }
    const user = prompt("Enter S, W or G");
    if(user != "S" && user != "W" && user != "G")
    {
        alert("Please chooes the wright option");
         return run();
    }
    const rem = document.getElementById('rem');
    rem.innerHTML = `Remaining Chance : ${remaining}`;    
    const wincount = document.getElementById('win');
    wincount.innerHTML = `Win : ${win}`;
    const loosecount = document.getElementById('loose');
    loosecount.innerHTML = `Loose : ${loose}`;

    const random = Math.floor(Math.random() * 3);
    const WTL = document.getElementById('WTL');
    WTL.style.display = "inline";
    console.log(CPU[random]);
    console.log(user);
    if(CPU[random] === user)
    {
        WTL.innerHTML = "Tied";
    }
    else if(CPU[random] === 'S' && user ==="G")
    {
        win++;
        WTL.innerHTML = "Winner";
        wincount.innerHTML = `Win : ${win}`;
    }
    else if(CPU[random] === 'W' && user ==='S')
    {
        win++;
        WTL.innerHTML = "Winner";
        wincount.innerHTML = `Win : ${win}`;
    }
    else if(CPU[random] === 'G' && user === 'W')
    {
        win++;
        WTL.innerHTML = "Winner";
        wincount.innerHTML = `Win : ${win}`;
    }
    else{
        loose++;
        WTL.innerHTML = "Looser";
        loosecount.innerHTML = `Loose : ${loose}`;
    }

}
run();

document.getElementById('next').addEventListener("click", ()=>
{
    
    remaining--;
    run();
})



