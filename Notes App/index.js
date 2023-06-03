const addBtn = document.getElementById('addBtn');
const main = document.querySelector('#main');


addBtn.addEventListener("click", function () {
    addNote();

})

const saveNotes = () =>
{
    const notes = document.querySelectorAll('.note textarea');
    const data = [];
    notes.forEach(
        (note) =>
        {
            data.push(note.value);
        }

    )
    if(data.length === 0)
    {
        localStorage.removeItem('notes');
    }
    else 
    {
        localStorage.setItem("note", JSON.stringify(data));
    }
    
}

const addNote = (text="") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool">
    <i class="fas fa-save save"></i>
    <i class="fas fa-trash trash"></i>
    </div>
    <textarea>${text}</textarea>
    `;
    

    note.querySelector(".trash").addEventListener
    (
        "click", function ()
        {
            note.remove();
            saveNotes();
        }
    )

    note.querySelector(".save").addEventListener
    (
        "click", function ()
        {
            saveNotes();
        }
    )
    note.querySelector('textarea').addEventListener(
        "focus", function()
        {
            saveNotes();
        }
    )
    
    main.appendChild(note);
    
    
}


(
function()
{
    const lsnotes = JSON.parse(localStorage.getItem("note"));
    if(lsnotes === null)
    {
        addNote();
    }
    else
    {
        lsnotes.forEach(
            (lsnote) =>
            {
                addNote(lsnote);
            }
        )
    }
    
})();

setInterval(() =>
{
saveNotes()}, 1000);
