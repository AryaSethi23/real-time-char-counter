const textareaE1 = document.getElementById("textarea");

const totalCounterE1 = document.getElementById("tota-counter");

const remainingCountE1 = document.getElementById("remaining-count");

textareaE1.addEventListener("keyup", ()=> {
    updateCounter();
})

function updateCounter(){
    totalCounterE1.innerText = textareaE1.value.length;
    remainingCountE1.innerText = textareaE1.getAttribute("maxLength");
}