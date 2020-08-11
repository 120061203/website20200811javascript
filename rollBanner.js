var slideIndex = 1;
showSlides(slideIndex);


//移動目前圖片 n=-1向前 n=1 向後
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//顯示目前圖片
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var _slides = document.getElementsByClassName("mySlides");
    var _dots = document.getElementsByClassName("dot");
    if (n > _slides.length) { //如果已經是最後一張
        slideIndex = 1; //index 回到1
    }
    if (n < 1) { //如果已經是第一張
        slideIndex = _slides.length; //index回最後一張
    }
    for (i = 0; i < _slides.length; i++) {
        _slides[i].style.display = "none"; //圖片全部隐藏
    }
    for (i = 0; i < _dots.length; i++) {
        _dots[i].className = _dots[i].className.replace(" active", ""); //去除所有active class
    }
    _slides[slideIndex - 1].style.display = "block"; //顯示第0張圖
    _dots[slideIndex - 1].className += " active"; //為dot 加上active的class
}