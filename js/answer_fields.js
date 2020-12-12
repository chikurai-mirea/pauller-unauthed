$(document).ready(function(){
    $('#add_answ').click(function(){
        $('.fields').append($('<input>', {
            'type': 'text',
            'class': 'answ_field',
            'placeholder': 'Add answer'
          }));
    });
    
    $('#rm_answ').click(function(){
        var inputs_count = $('.fields').find('input').length/2;
        if(inputs_count>1)  {
            $('.fields input:last-child').remove();
        } else {
            alert("You can't delete the last answer field!");
        }
    });

    $('#add_answ_m').click(function(){
        $('.fields').append($('<input>', {
            'type': 'text',
            'class': 'answ_field',
            'placeholder': 'Add answer'
          }));
    });
    
    $('#rm_answ_m').click(function(){
        var inputs_count = $('.fields').find('input').length/2;
        if(inputs_count>1)  {
            $('.fields input:last-child').remove();
        } else {
            alert("You can't delete the last answer field!");
        }
    });

});