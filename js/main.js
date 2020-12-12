// Pop-ups logic

$(document).ready(function() {
    // Pop-up for warn if user tried to create the poll w\o login
    $('#popup_create_warn').click(function() {
        $('#popup').addClass('warn_size');
        $('.warn_content').show();
        $('#pop_ups_overlay').fadeIn(297, function() {
            $('#popup').css('display', 'block').animate({ opacity: 1 }, 198);
        });
    });


    // Overlay to close pop-up
    $('#pop_ups_overlay').click(function() {
        $('#popup').css('display', 'none');
        $('#pop_ups_overlay').fadeOut(297);
        $('#popup').removeClass("warn_size");
    });
});