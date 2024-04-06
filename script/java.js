//Para desaparecer a nav
const navContainer = document.querySelector('nav');
const scrollMaximo = 10;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > scrollMaximo) 
    {
        navContainer.classList.add('teste');
    } 
    else 
    {
        navContainer.classList.remove('teste');
    }
});


//Para as perguntas frequentes
    const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });


//Para a imagem da logo
    window.addEventListener('resize', function() {
        var logoImage = document.querySelector('.logo img');
        if (window.innerWidth <= 425)
        { 
            logoImage.src = '../img/logo-responsividade.png';
        } 
        else 
        {
            logoImage.src = '../img/logo-removebg-preview.png';
        }
    });

//Para os itens na nav
$(document).ready(function(){

    var btnmenumobile = $('.btn-menumobile')
    $(btnmenumobile).on('click', function(){
        $('.logo ul').toggleClass('open');
    })
});
