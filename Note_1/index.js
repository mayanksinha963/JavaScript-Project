const addbtn = document.getElementById('add-btnid');
const main = document.getElementById('mainid');

const saveNotes = () => {
    let notes = document.querySelectorAll('#textareaid');
    console.log(notes.length);
    // console.log(notes)
    const data = [];
    notes.forEach((note) => {
        if (note.value.length) {
            data.push(note.value);
        }
    })
    if (data.length === 0) {
        localStorage.removeItem('notes');
    }
    else {
        localStorage.setItem('notes', JSON.stringify(data));
    }
}

const boldNotes = () => {
    let notes = document.querySelectorAll('#textareaid');
    let notesall = document.querySelectorAll('#boldid');
    let textall = document.querySelectorAll('#textareaid');
    const data = [];
    // console.log(notes.length);

    for (let i = 0; i < textall.length; i++) {
        // console.log(notesall[i]);
        if (textall[i].value.length && notesall[i].classList.contains('bold')) {
            data.push('B');
        }
        else if (textall[i].value.length && !notesall[i].classList.contains('bold')) {
            data.push('N');
        }
    }

    localStorage.setItem('bold', JSON.stringify(data));
}

const boldItalic = () => {
    let notes = document.querySelectorAll('#textareaid');
    let notesall = document.querySelectorAll('#italicid');
    let textall = document.querySelectorAll('#textareaid');
    const data = [];

    for (let i = 0; i < textall.length; i++) {
        // console.log(notesall[i]);
        if (textall[i].value.length && notesall[i].classList.contains('italic')) {
            data.push('I');
        }
        else if (textall[i].value.length && !notesall[i].classList.contains('italic')) {
            data.push('N');
        }
    }
    localStorage.setItem('italic', JSON.stringify(data));
}

const addNote = (note = "") => {
    const box1 = document.createElement('div');
    box1.innerHTML =
        `<div class="upper">
    <div class="padding pointer" id="boldid">B</div>
    <div class="padding pointer" id="italicid">I</div>
    <img src="save.png" class = "save padding pointer" id="saveid" alt="" srcset="">
    <img src="Trash.png"  class="trash padding pointer" id="trashid" srcset="">
</div>
<textarea name="" id="textareaid" class="text" cols="30" rows="10">${note}</textarea>
</div>`

    box1.classList.add('box');
    main.appendChild(box1);


    const trash = box1.querySelector('#trashid');

    trash.addEventListener('click', () => {

        box1.remove();
        boldNotes();
        boldItalic();
        saveNotes();

    })

    const save = box1.querySelector('#saveid');
    save.addEventListener('click', () => {
        saveNotes();
    })

    const boldid = box1.querySelector('#boldid');
    // console.log(boldid);
    let notes = box1.querySelector('#textareaid');
    // let textall = document.querySelectorAll('#textareaid');
    // const data = [];
    // let notesall = document.querySelectorAll('#boldid');



    boldid.addEventListener('click', () => {
        // const element = Array.from(textall);
        boldid.classList.toggle('bold');
        if (boldid.classList.contains('bold')) {
            notes.style.fontWeight = 'bold';
        }
        else {
            notes.style.fontWeight = 'normal';
        }
        
        boldNotes();
    });

    const italicid = box1.querySelector('#italicid');
    italicid.addEventListener('click', () =>
    {
        italicid.classList.toggle('italic');
        if(italicid.classList.contains('italic'))
        {
            notes.style.fontStyle = "italic";
        }
        else
        {
            notes.style.fontStyle = "normal";
        }
        boldItalic ();
    })
}




addbtn.addEventListener('click',
    () => {
        addNote();

    }
);

const boldnotesdef = (data, index) => {

    const box1 = document.querySelectorAll('.box');
    const boldid = document.querySelectorAll('#boldid');
    

    let notes = document.querySelectorAll('#textareaid');

    console.log(box1[index]);
        if (data == 'B') {
            
            boldid[index].classList.add('bold');
            notes[index].style.fontWeight = 'bold';
        }
     
    
}

const italicnotesdef =(data, index) => {
    const box1 = document.querySelectorAll('.box');
    const boldid = document.querySelectorAll('#italicid');
    

    let notes = document.querySelectorAll('#textareaid');

    
        if (data == 'I') {
            
            boldid[index].classList.add('italic');
            notes[index].style.fontStyle = 'italic';
        }
}

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem('notes'));
        if (lsnotes == null) {
            addNote();
        }
        else {
            lsnotes.forEach((note) => {
                console.log(note);
                addNote(note);
            })
        }
        const box1 = document.querySelectorAll('.box');
        
        const bnotes = JSON.parse(localStorage.getItem('bold'));
        // console.log(bnotes[0]);
        for(let i =0; i< box1.length; i++)
        {
            if(bnotes != null)
            {
                boldnotesdef(bnotes[i], i);
            }
        }

        const inotes = JSON.parse(localStorage.getItem('italic'));
        // console.log(bnotes[0]);
        for(let i =0; i< box1.length; i++)
        {
            if(inotes != null)
            {
                italicnotesdef(inotes[i], i);
            }
        }

    }
)();