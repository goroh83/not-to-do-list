$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var inputText = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="fa fa-trash-o"></i></span> ' + inputText + '</li>')
    }
});

$('h1 img').on('click', function(){
    $('.newInput').slideToggle();
    $('h1 img').toggleClass('rotated');

})
