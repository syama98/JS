const pullDownButton = document.getElementById("lists");

window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists");
    console.log(pullDownButton);
})

pullDownButton.addEventListener('mouseover', function(){
    console.log("乗る");
})
pullDownButton.addEventListener('click', function(){
    console.log("クリック");
})
pullDownButton.addEventListener('mouseout', function(){
    console.log("離れる");
})