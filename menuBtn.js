const _btn = document.getElementsByClassName("btn");
_btn[0].addEventListener('click', function() {
    myFunction(this);
});


function myFunction(x) {
    x.classList.toggle("change");

}