let code = [];
let j = 0;
for(let i=65; i<= 90; i++)
{
    code[j] = i;
    j++;
}

let upperSet = '';

for(let i = 0; i< 26; i++)
{
    upperSet += String.fromCharCode(code[i]);
}

console.log(upperSet);


let code1 = [];
j = 0;
for(let i = 97; i<=122; i++)
{
    code1[j] = i;
    j++;
}

let lowerSet = '';

for(let i= 1; i<26; i++)
{
    lowerSet += String.fromCharCode(code1[i]);
}

let numberSet = '';
for(let i = 1; i<=10; i++)
{
    numberSet += i;
}


const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) =>
{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePassword = (password = "") =>
{
    passBox.innerText = password;
    if(upperInput.checked)
    {
        password += getRandomData(upperSet);
    }

    if(lowerInput.checked)
    {
        password += getRandomData(lowerSet);
    }

    if(numberInput.checked)
    {
        password += getRandomData(numberSet);
    }

    if(symbolInput.checked)
    {
        password += getRandomData(symbolSet);
    }
    

    if(password.length < totalChar.value)
    {
        return generatePassword(password);
    }

    
    passBox.innerText = truncateString(password, totalChar.value);
    

}




document.getElementById("btn").addEventListener("click",
function()
{
    generatePassword();
})




const truncateString = (str, num)=>
{
    if(str.length>num)
    {
        let Substr = str.substring(0, num);
        return Substr;
    }
    else 
    {
        return str;
    }
}

document.getElementById("btn-1").addEventListener("click",
function copy()
{
    var copyText = passBox.innerText;

    // copyText.setSelectionRange(0, 99999); //For mobile devices

    navigator.clipboard.writeText(copyText);
    alert("Copid the text : " + copyText);
})

generatePassword();





