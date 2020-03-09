// Userlist data array for filling in info box
var userListData = [];
// DOM Ready

$(document).ready(function() {
 // Populate the user table on initial page load
    populateTable();
    $('#btnAdd').on('click', addUser);
});

// Fill table with data
function populateTable() {
    // Empty content string
    var tableContent = '';
    // jQuery AJAX call for JSON
    $.getJSON( '/users/userListJson', function( data ) {
            userListData = data;

            // For each item in our JSON, add a table row and cells to /the content string
            $.each(data, function(){
                tableContent += '<tr>';
                tableContent += '<td><a href="#" class="linkshowuser rel="' + this.username + '">' + this.username + '</a></td>';
                tableContent += '<td>' + this.email + '</td>';
                tableContent += '<td><a href="#" class="linkdeleteuser rel="' + this._id + '">delete</a></td>';
                tableContent += '</tr>';
            });
            // Inject the whole content string into our existing HTML table
            $('#userList table tbody').html(tableContent);
    });
};

function addUser(event) {
    alert('add');
    event.preventDefault();
    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });
        // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
        // If it is, compile all user info into one object
        var newUser = {
            'nom': $('#addUser input#nom').val(),
            'prenom': $('#addUser input#prenom').val(),
            'age': $('#addUser input#age').val(),
            'location': $('#addUser input#location').val(),
        }
        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/add',
            dataType: 'JSON'
        }).done(function( response ) {
            console.log(newUser, 'new User');
            // Check for successful (blank) response
            if (response.msg === '') {
                // Clear the form inputs
                $('#addUser input').val('');
                // Update the table
                populateTable();
            }
            else {
                // If something goes wrong, alert the error message  that our service returned
                alert('Error: ' + response.msg);
            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
   }
};