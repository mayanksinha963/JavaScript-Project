const getColor = () => {
    const randomnum = Math.floor(Math.random() * 16777215);
    // console.log(randomnum);
    const randomcolor = "#" + randomnum.toString(16);
    // console.log(randomcolor)

    document.getElementById("color-code").innerHTML = randomcolor;

    document.body.style.backgroundColor = randomcolor;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();

