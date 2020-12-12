$(document).ready(function(){

    function is_authed(path) {
        var status = path.split("_")[path.split("_").length-1].split(".")[0]

        if (status == "authed") {
            return 1;
        }

        return 0;
    }

    var pathname = window.location.pathname.split('/')[window.location.pathname.split('/').length-1]

    $('.user_gmbg').click(function(){
        if (is_authed(pathname)) {
            $('.gmbg_menu_authed').show();

        } else {
            $('.gmbg_menu_unauthed').show();
        }
    });

    $('.gmbg_close').click(function(){
        $('.gmbg_menu_authed').hide();
        $('.gmbg_menu_unauthed').hide();
    });

});