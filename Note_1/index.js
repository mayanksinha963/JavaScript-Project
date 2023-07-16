const addBtn = document.getElementById('addBtn');


const savenote = (add) => {
    let data = [];
    const note = document.querySelectorAll('.box textarea');
    // const note1 = add.querySelector('.box textarea');
    // console.log(note1.value);
    for (let notes of note) {
        // if (notes.value.length != 0) {

            // console.log(notes.value.length);
            data.push(notes.value);
            console.log(data);
            // if (note1.value === notes.value) {
            //     break;
            // }
        //}

    }

    // note.forEach((notes) => {
    //     if (note1.value)
    //         data.push(notes.value);
    // })
    let k = 0;
    for(let i =0; i<note.length; i++)
    {
        if(note[k].value.length === 0)
        {
            let j = i;
            data.splice(j, 1);
            console.log(data);
            console.log(i);
            j--;
            i = j;
            k++;

        }
    }
    
    // if (data.length === 0) {
    //     localStorage.removeItem('notes');
    // }
    // else {
    //     localStorage.setItem('notes', JSON.stringify(data));
    // }

    localStorage.setItem('notes', JSON.stringify(data));



}

const boldfun = (add) =>
{
    const note = document.querySelectorAll('.box textarea');
    const bold = add.querySelector('#boldid');
    const boldall = document.querySelectorAll('#boldid');
   
    const textarea = add.querySelector('#textareaid');
    const elements = Array.from(document.querySelectorAll('#textareaid'));
    // console.log(elements);
    let bolddata = JSON.parse(localStorage.getItem('bolds'))??[];
    bold.classList.toggle('bold');
    textarea.classList.toggle('bold');
    let i = 0;
        for (let b of boldall) {
            
            
                
            if (b.classList.contains('bold')) {
                const index = elements.indexOf(textarea);
                bolddata[i] = 'B';
                // console.log(bolddata[i]);
            }
            else if(!(b.classList.contains('bold')))
            {
                const index = elements.indexOf(textarea);
                bolddata[i] = null;
                // console.log(bolddata[i]);
                
                
            }
        
        i++;
        }

        for(let j = 0; j<elements.length; j++)
        {
            console.log(elements[j]);

            // if(elements[j].value.length === 0)
            // {
            //     console.log('Hello');
            // }
            // console.log(bolddata[j]);
            if(bolddata[j] === null)
            {
                if(elements[j].value.length === 0)
                {
                    
                    // console.log(elements[j].value);
                    bolddata.splice(j,1);
                    console.log(bolddata);
                }
            }
        }

        
        localStorage.setItem('bolds', JSON.stringify(bolddata));
        
}



const addNote = (text = "") => {
    const add = document.createElement('div');
    // const box = document.getElementById('boxid');
    const main = document.getElementById('mainid');

    add.innerHTML = `
    <div id="boxid">
    <div class="upper">
    <p id="boldid">B</p>
    <p id="italicid">I</p>
        <img src="Trash.png" alt="" srcset="" id="trash">
        <img src="save.png" alt="" srcset="" id="save">
    </div>
    <textarea name="" cols="30" rows="10" id="textareaid">${text}</textarea>
</div>`;
    add.classList.add('box');
    main.appendChild(add);



    const trash = add.querySelector('#trash');
    const save = add.querySelector('#save');


    trash.addEventListener('click', () => {
        add.remove();
        savenote();
    })

    save.addEventListener('click', () => {
        savenote(add);
    })
    

    const bold = add.querySelector('#boldid');
    bold.addEventListener('click', () =>
    {
        boldfun(add);
        // console.log(elements.indexOf(textarea));
        
    })
    
}

addBtn.addEventListener('click', () => {
    addNote();
});

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem('notes'));
        if (lsnotes == null) {
            addNote();
        }
        else {
            lsnotes.forEach(element => {
                addNote(element);
            });
        }
    }
)();


// setInterval(() => {
//     savenote()
// }
//     , 1000);
