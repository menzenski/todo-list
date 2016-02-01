$('#todo-list').on("click", "li", function() {
    $(this).toggleClass("done");
});

$('#todo-list').on("click", ".delete", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$('#add').keypress(function(e) {
    if (e.which === 13) {
        var newTodo = $(this).val();
        var span = '<span class="delete"><i class="fa fa-trash"></i></span> ';
        $(this).val("");
        $('#todo-list').append('<li>' + span + newTodo +'</li>');
    }
});

$('#edit-symbol').click(function() {
    $(this).toggleClass("fa-plus fa-minus");
    $('#add').fadeToggle();
});
