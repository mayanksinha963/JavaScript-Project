const questions = [
    {
        'ques' : '3 pumps working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day ?',
        'a' : '9',
        'b' : '10',
        'c' : '11',
        'd' : '12',
        'correct' : 'd',
    },

    {
        'ques' : 'If 18 people bind 900 books in 10 days , How many people will be required to bind 660 books in 12 days ?',
        'a' : '12',
        'b' : '14',
        'c' : '13',
        'd' : '11',
        'correct' : 'd'
    },

    {
        'ques' : ' person can weave 4 mats in 4 days. At the same rate, how many mats would be woven by 8 person in 8 days ?',
        'a' : '16',
        'b' : '12',
        'c' : '8',
        'd' : '4',
        'correct' : 'a'
    },

    {
        'ques' : '	If the price of 23 toys is 276, then what will the price of 12 toys ?',
        'a' : '144',
        'b' : '148',
        'c' : '156',
        'd' : '186',
        'correct' : 'a'
    },
]

let count = 0;
let right = 0;
let wrong = 0;
let subs = 0;
const total = questions.length;
const ques = document.getElementById("question");
const option = document.querySelectorAll(".option");


function disable ()
{
    if(count <= 0)
    {
        document.querySelector('#prev').disable = true;
        document.getElementById('prev').style.opacity= "0.5";
        document.getElementById('prev').style.cursor= "default"
        
    }else 
    {
        document.querySelector('#prev').disable = false;
        document.getElementById('prev').style.opacity= "1";
        document.getElementById('prev').style.cursor= "pointer"
    }
    if(count == total-1)
    {
        document.getElementById('next').disable = true;
        document.getElementById('next').style.opacity ="0.5";
        document.getElementById('next').style.cursor= "default"
        
    }
    else
    {
        document.getElementById('next').disable = false;
        document.getElementById('next').style.opacity ="1";
        document.getElementById('next').style.cursor= "pointer"
    }
}

const reset = () =>
{
    option.forEach((inputs) =>
    {
        inputs.checked = false;
    })
}

const loadquestion =()=>
{
    
    disable();
    
    if(subs == total)
    {
        return endquiz();
    }
    reset();
    const cont = questions[count];
    ques.innerHTML = `${count+1}. ${cont.ques} `;
    option[0].nextElementSibling.innerHTML = cont.a;
    option[1].nextElementSibling.innerHTML = cont.b;
    option[2].nextElementSibling.innerHTML = cont.c;
    option[3].nextElementSibling.innerHTML = cont.d;



}

const endquiz = () =>
{
    ques.style.display = "none";
    let index = 0;
    let length = option.length;
    for(; index<length; index++)
    {

        option[index].style.display = "none";
        option[index].nextElementSibling.style.display = "none";
    }
    document.getElementById('prev').style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("result1").style.display = "inline";
    document.getElementById("right").innerHTML = right;
    document.getElementById("total").innerHTML = total;
}

const submit =()=>
{
    subs++;
    const cont = questions[count];
    // console.log(cont.correct);
    const answer = getanswer();
    if(!answer)
    {
        alert("Please Select one option");
    }else{
    if(answer === cont.correct)
    {
        console.log("Right");   
        right++;
    }
    else
    {
        console.log("Wrong");
        wrong++;
    }
    count++;
    loadquestion();}

}

function getanswer ()
{
 let answer;
 option.forEach((inputs) =>
 {
    if(inputs.checked)
    {
        
        answer = inputs.value;
    }
 }
)
// console.log(answer);
return answer;   
}




    document.getElementById("next").addEventListener("click", function()
{
    if(count < total-1)
    {

    count++;
    loadquestion();
    }
})
;


document.getElementById("prev").addEventListener("click",function()
{
    if(count> 0)
    {
    count--;
    loadquestion();
    }
} )
loadquestion();

