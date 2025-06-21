$(document).ready(function () {
    // Menu mobile toggle
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Atualiza a navegação ativa com base na seção visível
    $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop() + 100; // ajuste para considerar altura do header

        let currentSectionId = '';

        $('section').each(function () {
            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = $(this).attr('id');
            }
        });

        $('.nav-item').removeClass('active');
        $('.nav-item a[href="#' + currentSectionId + '"]').parent().addClass('active');
    });

    // Animações com ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.pessoas', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });
});
