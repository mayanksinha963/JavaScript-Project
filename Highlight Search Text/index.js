
const search = document.getElementById('Search');


search.addEventListener('click', () =>
{
    let texttosearch = document.getElementById('text').value;
    let paragraph = document.getElementById('paragraph');
    texttosearch = texttosearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(texttosearch, "gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    let paragraphcontent = paragraph.textContent;
    // let matches = paragraphcontent.match(pattern);
    // console.log(matches);

})