$('#summary').click(function(){
    $('#hidden_info').slideToggle('slow', function(){
        if( $('#hidden_info').is(':hidden') ){
            $('#summary').text('Summary');
        } else {
            $('#summary').text('Hide content');
        }
    });
    
});


$(".view a").on('click', function(){
    $('.products ul').toggleClass('list');
    return false;
});