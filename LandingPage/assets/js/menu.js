window.addEventListener("scroll", function(){
    let menu = document.querySelector('#menu')
    menu.classList.toggle('scrolling', window.scrollY>0)
})