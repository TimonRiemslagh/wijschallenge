$(document).ready(function() {
    var modal = $('.modalWrapper');
    modal.hide();

    $('.leesmeer').on('click', function(e) {
        e.preventDefault();
        modal.show();
        $('body').addClass('noscroll');

    });

    $('.close').on('click', function() {
        closeModal();

    });

    $(modal).on('click', function(e) {
        if($(e.target)[0].className == 'modalWrapper') {
            closeModal();
        }
    });

});

var closeModal = function() {
    $('.modalWrapper').hide();
    $('body').removeClass('noscroll');
};