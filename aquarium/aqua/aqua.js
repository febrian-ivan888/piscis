window.addEventListener("scroll", function(){var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
})

var headerBg = document.getElementById('bg')
window.addEventListener('scroll',function(){
    headerBg.style.opacity = 1 - +this.window.pageYOffset/550+''
})