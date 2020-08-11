var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var _slides = document.getElementsByClassName("mySlides");
    var _dots = document.getElementsByClassName("dot");
    for (i = 0; i < _slides.length; i++) {
        _slides[i].style.display = "none"; //圖片消失
    }
    slideIndex++; //圖片index++
    if (slideIndex > _slides.length) { slideIndex = 1 }
    for (i = 0; i < _dots.length; i++) {
        _dots[i].className = _dots[i].className.replace(" active", "");
    }
    _slides[slideIndex - 1].style.display = "block"; //圖片顯示
    _dots[slideIndex - 1].className += " active"; //圓點加上active class
    setTimeout(showSlides, 2000); // 時間延遲2秒
}