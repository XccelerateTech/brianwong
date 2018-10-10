$('input[name="name"]').val("Peter");
$('input[name="phone"]').val(123456789);
$('input[name="email"]').val("peter@gmail.com");
let clear = $('<button>', {type:"reset"}); //reset simply remove the value in the input field but not the stored value of the input element
clear.html('clear');
$(".sections #row-submit").append(clear);
$('table').css('color','blue');
$('header h1').html("Brian's contact list application");
$("tbody").append(`
<tr class="row">
<td>Christina</td>
<td>6840308603</td>
<td>chr@gmail.com</td>
</tr>`)

$(document).ready(function(){

    $('input[name="name"]').keydown(function(e){
        let input = e.target.value;
        if (input.length > 10){
            $(this).css("borderColor","red");
        }else {
            $(this).css("border","1.5px solid grey")
        }
    })

    $('input[name="phone"]').keydown(function(e){
        let input = e.target.value;
        if(input.length < 6 || input.length>16){
            $(this).css("borderColor","red");
        }else {
            $(this).css("border","1.5px solid grey")
        }
    })


    $('#updated-contact-list tbody .row').click(function(){
        let name = $(this).find("td:nth-child(1)").html();
        let phone = $(this).find("td:nth-child(2)").html();
        let email = $(this).find("td:nth-child(3)").html()
        $('#form2 input[name="name"]').val(name);
        $('#form2 input[name="phone"]').val(phone);
        $('#form2 input[name="email"]').val(email);
    })

    $('.form').submit(function(event){
        event.preventDefault();
        let name = $(this).find('input[name="name"]').val();
        let phone = $(this).find('input[name="phone"]').val();
        let email = $(this).find('input[name="email"]').val();
        alert(`name:${name}
        phone:${phone}
        email:${email}`);
    })

})





