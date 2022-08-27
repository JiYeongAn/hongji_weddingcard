$(document).ready(function(){
   
    /* nav */
    $('#toggle').click(function() {
        $('#toggle .bar').toggleClass('animate');
        $('#page').toggleClass('overlay');
        $('.button').toggle(1000);

    });
    
});