$(document).ready(function() {
    $('.tab_trigger').click(function() {
        $('.tab_trigger').removeClass('tab_trigger--active');
        $('.tab_pane').removeClass('tab_pane--active');
        $(this).addClass('tab_trigger--active');
        $($(this).attr('href')).addClass('tab_pane--active');
    });
    $('.tab_trigger:first').click();
});