$('input[name="name"]').val("Peter");
$('input[name="phone"]').val(123456789);
$('input[name="email"]').val("peter@gmail.com");
let clear = $('<button>');
clear.html('clear');
$(".sections #row-submit").append(clear);
$('table').css('color','blue');
$('header h1').html("Brian's contact list application");

document.querySelector("#row-submit").addEventListener('click',function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
    $('tbody').append(`
        <tr class="row">
        <td>${$('input[name="name"]').val()}</td>
        <td>${$('input[name="phone"]').val()}</td>
        <td>${$('input[name="email"]').val()}</td>
        </tr>`)
})







