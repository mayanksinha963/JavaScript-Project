const question = document.getElementById('ques');
const boxd = document.getElementById('boxd');


question.addEventListener("keyup", (event) => {

    if (event.key == 'Enter') {
        if (question.value == "") {
            alert("Please write something");
        }
        else {
            todo(question.value);
            // localStorageset();
            question.value = "";

        }


    }
})

function localStorageset() {
    let data = [];
    const notes = document.querySelectorAll('.down li');
   
    notes.forEach((note) =>
    {
        console.log(note.innerText);
        data.push(note.innerText)
    })
    // let data = JSON.parse(localStorage.getItem('text')) ?? [];
    // data.push(question.value)
    localStorage.setItem('text', JSON.stringify(data));
}

function todo(text) {
    const list = document.createElement('ul');

    list.innerHTML = `
    <div class="cross" id="crossid">&times;</div>
    <li>${text}</li>`;
    list.classList.add('down')
    list.querySelector('#crossid').addEventListener("click", () => {
        list.remove();
        localStorageset();
        


    })

    boxd.appendChild(list);

    list.addEventListener("click", () => {
        list.classList.toggle('click');
    })
    localStorageset();
}

(
    function () {
        let data = JSON.parse(localStorage.getItem('text'));
        if (data != null) {
            data.forEach(element => {
                todo(element)

            });
        }
    }
)();