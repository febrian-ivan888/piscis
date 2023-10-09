window.addEventListener("scroll", function(){var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 0);
})

var headerBg = document.getElementById('bg')
window.addEventListener('scroll',function(){
    headerBg.style.opacity = 1 - +this.window.pageYOffset/550+''
})

let el=document.querySelectorAll('.thumb li');
for(let i=0 ; i < el.length ; i++)
{
    el[i].onclick = function()
    {
        var c = 0;
        while(c < el.length)
        {
            el[c++].className='check';
        }
        el[i].className='check active';
    }
}