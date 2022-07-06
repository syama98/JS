const pullDownButton = document.getElementById("lists");
const pullDownParents = document.getElementById("pull-down");

window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
})

pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color: blue;");
})
pullDownButton.addEventListener('click', function(){
    if (pullDownParents.getAttribute("style") == "display: block;") {
        pullDownParents.removeAttribute("style", "display: block;");
    } else {
        pullDownParents.setAttribute("style", "display: block;");
    }
})
pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style");
})