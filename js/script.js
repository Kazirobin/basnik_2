let header = document.querySelector('#header');
window.addEventListener('scroll',(event) => {
    if(this.scrollY>100){
        header.classList.add('bg_color');
    }
    else{
        header.classList.remove('bg_color');

    }
})