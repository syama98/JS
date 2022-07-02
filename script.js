function getElement() {
    element = document.querySelector('#shopB');
    console.log("選ばれたのは" + element.textContent + "でした");
}

function getElements() {
    elements = document.querySelectorAll('.shop li');
    let len = elements.length;
    for (let i = 0; i < len; i++) {
        console.log(elements.item(i).textContent);
    }
}