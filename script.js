const backToTopBtn = document.querySelector('#back_to_top');

window.addEventListener('scroll', scrollFunction);

function scrollFunction ()  {
    if(window.pageYOffset > 300) {
        if(!backToTopBtn.classList.contains('back_to_top_Entrance')) {
            backToTopBtn.classList.remove('back_to_top_Exit');
            backToTopBtn.classList.add('back_to_top_Entrance');
            backToTopBtn.style.display = 'flex';
        }
    }
    else {
        if(backToTopBtn.classList.contains('back_to_top_Entrance')) {
            backToTopBtn.classList.remove('back_to_top_Entrance');
            backToTopBtn.classList.add('back_to_top_Exit');
            setTimeout(function()  {
                backToTopBtn.style.display = "none";
            }, 250);
        }
    }
}


