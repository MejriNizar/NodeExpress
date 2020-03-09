$(document).ready(function() {
    var nom = $('#nom').val();
    var prenom = $('#prenom').val();
    var age = $('#age').val();
    var location = $('#location').val();
    fControle = $('.form-control');

    fControle.keyup(function () {
        if ($(this).val().length < 4) {
            $(this).css({
                borderColor:'red',
                color:'red',
                borderWidth : '2px'
            });
        } else {
            $(this).css({
                borderColor:'green',
                color:'green',
            });
        }
    });

    $('#age').change(function () {
        if ($(this).val() < 0) {
            $(this).val(0);
            // $(this).css({
            //     borderColor:'red',
            //     color:'red',
            //     borderWidth : '2px'
            // });
        } else {
            $(this).css({
                borderColor:'green',
                color:'green',
            });
        }
    });

    $('#addUser').submit(function(e) {

        // $(".error").remove();
        //
        // if ($('.form-controle').val().length < 1) {
        //     $('.form-controle').after('<br><span class="error">This field is required</span>');
        //     $('.form-controle').css("border-color", "red");
        // }
        // if (prenom.length < 1) {
        //     $('#prenom').after('<br><span class="error">This field is required</span>');
        // }
        // if (age.length < 1) {
        //     $('#age').after('<br><span class="error">This field is required</span>');
        // }
        // if (location.length < 8) {
        //     $('#location').after('<br><span class="error">Password must be at least 8 characters long</span>');
        //     $('#location').css("border-color", "red");
        // }
    });

});