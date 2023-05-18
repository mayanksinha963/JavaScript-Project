const questions = [{
    'que' : 'Which of the following is a markup langugae',
    'a' : 'HTML',
    'b' : 'CSS',
    'c' : 'JavaScript',
    'd' : 'PHP',
    'correct' : 'a',
},
{
    'que' : 'Which year was JavaScript launched ?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : 'none of above',
    'correct' : 'b',
},
{
    'que' : 'What does CSS stands for ?',
    'a' : 'Hypertext Markup Language',
    'b' : 'Cascading Style Sheet',
    'c' : 'Jason Object Notation',
    'd' : 'Helicopters Terminals Motorboats Lamborginis',
    'correct' : 'b',
}
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
// const submit = document.querySelector("btn");


const loadquestion = () =>
{
    if(index === total)
    {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].innerText = data.a;
    optionInputs[1].innerText = data.b;
    optionInputs[2].innerText = data.c;
    optionInputs[3].innerText = data.d;
    // quesBox.innerHTML = index+1 + ")" + data.que;

    // index++;
    // if(index == questions.length)
    // {
    //     alert("Done");
    // }
}

const submitQuiz = () =>
{
        const data = questions[index];
        const ans = getAnswer();
        if(ans === data.correct)
        {
            right++;
        }
        else 
        {
            wrong++;
        }
        index++;
        loadquestion();
        return;
}

const getAnswer = () =>
{
    let answer;
    optionInputs.forEach(
        (input) =>
        {
            if(input.nextElementSibling.checked)
            {
                // console.log(input.nextElementSibling.value);
                answer =  input.nextElementSibling.value;
                
            }
            
        }
    )
    return answer;
}

const reset = () =>
{
    optionInputs.forEach(
        (input) =>
        {
            input.nextElementSibling.checked = false;
        } 
    )
}

const endQuiz = () =>
{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the Quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    `
}

// submit.addEventListener("click", loadquestion);

 loadquestion();