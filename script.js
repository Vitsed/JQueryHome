  
$(document).ready(function() {
    $('nav li:eq(1), .main_btn, .main_btna').click(function() {
        $('.overlay').show();
        $('.modal').slideDown('slow');
    });

    $('.close').click( () => {
        $('.modal').slideUp('slow');
        $('.overlay').hide()
    
    });
});
