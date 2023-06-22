const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('.main');
const bc = [];
const ic = [];

addBtn.addEventListener("click", function()
{
    addNote();
});

const saveNote = ()=>
{
    const notes = document.querySelectorAll(".box textarea");
    const data = [];
    notes.forEach(
        (note) =>
        {
            data.push(note.value);
        })
        
    if(data.length == 0)
    {
        localStorage.removeItem('notes');
    }
    else 
    {
        localStorage.setItem("note", JSON.stringify(data));
    }
   
    
    
}

const addNote = (text="", b,  i) =>
{
    const note = document.createElement('div');
    note.classList.add('box');
    note.innerHTML = `
    <div class="upper">
                <i class="fas fa-save save"></i>
                <i class="fas fa-trash trash"></i>
            </div>
            <div class="lower">
                <i class="fa-solid fa-bold bold bold1"></i>
                <i class="fa-solid fa-italic italic"></i>
                <div class="font1">
                    <label for="font">Font size</label>
                    <input type="number" id="font" value="18" max="72">
                </div>
            </div>
            <textarea>${text}</textarea>
    `;
    
    
    note.querySelector('.trash').addEventListener("click", function()
    {
        note.remove();
        saveNote();
        
    })

    note.querySelector('.save').addEventListener("click", function()
    {
        saveNote();
    })

    note.querySelector('textarea').addEventListener("focus", function()
    {
        saveNote();
    })

    const bold = note.querySelector('.bold');
    const bold1 = document.querySelectorAll('.box .bold1');
    // console.log(bold1);
    const textarea = note.querySelector('textarea');
    if(b == true)
    {
        bold.classList.add('active');
        textarea.style.fontWeight = "bold";
    }

    // if(localStorage.getItem("active") == "italic")
    // {
    //     bold.classList.add('active');
    //     textarea.style.fontWeight = "italic";
    // }

    bold.addEventListener("click", function()
    {
        if(bold.classList.contains('active'))
        {
            bold.classList.remove('active');
            textarea.style.fontWeight = "normal";
            JSON.parse(localStorage.removeItem("active"));
            
            
        }
        else
        {
            bold.classList.add('active');
            textarea.style.fontWeight = "bold";
            // if(bold.classList.contains("active"))
            // {
            //     bold1.forEach(
            //         (bolds) =>
            //         {
            //             bc.push("bold");
            //         }
            //     )
            // }
            console.log(bold1);
            bold1.forEach(
                (bolds) =>
                {
                    if(bolds.classList.contains("active"))
                    {
                        bc.push("bold");

                    }
                    
                }
            )
            localStorage.setItem("active", JSON.stringify(bc));
        }
    })

    

    const italic = note.querySelector('.italic');
    
    italic.addEventListener("click", function()
    {
        if(italic.classList.contains('active'))
        {
            italic.classList.remove('active');
            textarea.style.fontStyle = "normal";
            
        }
        else
        {
            italic.classList.add('active');
            textarea.style.fontStyle = "italic"; 
            localStorage.setItem("active", "italic");
        }
    })

    const font = note.querySelector('#font');
    font.addEventListener("change", function()
    {
        const fontsize = font.value;
        console.log(fontsize);
        textarea.style.fontSize = `${fontsize}px`;
    });

    
    main.appendChild(note);
}

(
    function()
    {
        const lsnodes = JSON.parse(localStorage.getItem("note"));
        if(lsnodes === null)
        {
            addNote();
        }
        else
        {
            lsnodes.forEach(
                (lsnode)=>
                {
                    let b = false;
                    
                    if(JSON.parse(localStorage.getItem("active")) == "bold")
                    {
                        b = true;
                    }
                    console.log(b);
                    addNote(lsnode, b, false);
                }
            )
        }
    }
)();

