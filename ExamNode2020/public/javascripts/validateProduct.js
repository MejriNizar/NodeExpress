$(document).ready(function () {
        $('#btnAdd').prop('disabled', true);
        var ref = $('#ref');
        var libelle = $('#libelle');
        var description = $('#description');
        var quantite = $('#quantite');
        var date = $('#date');

        fControle = $('.form-control');

        fControle.keyup(function () {
            if ($(this).val().length < 1) {
                $(this).css({
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: '2px'
                });
                return false;
            } else {
                $(this).css({
                    borderColor: 'green',
                    color: 'green',
                });
                return true;
            }
        });

        function validateLibelle() {
            if (libelle.val().length < 5 || libelle.val().length > 10) {
                libelle.css({
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: '2px'
                });
                return false;
            } else {
                libelle.css({
                    borderColor: 'green',
                    color: 'green',
                });
                return true;
            }
        }

        function validateDescription() {
            if (description.val().length > 20) {
                description.css({
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: '2px'
                });
                return false;
            } else {
                description.css({
                    borderColor: 'green',
                    color: 'green',
                });
                return true;
            }
        }

        function validateQte() {
            if ((quantite.val() < 0) || (quantite.val() > 999)) {
                quantite.css({
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: '2px'
                });
                return false;
            } else {
                quantite.css({
                    borderColor: 'green',
                    color: 'green',
                });
                return true;
            }
        }

        function validateDate() {
            if (date.val().toString().length != 10) {
                date.css({
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: '2px'
                });
                return false;
            } else {
                date.css({
                    borderColor: 'green',
                    color: 'green',
                });
                return true;
            }
        }

        fControle.keyup(function (e) {
            console.log(validateDescription());
            if (validateQte() === true && validateDescription() === true && validateLibelle() === true && validateDate() === true) {
                console.log('85');
                $('#btnAdd').prop('disabled', false);
            } else {
                console.log('88');
                $('#btnAdd').prop('disabled', true);
            }
        });
    }
);