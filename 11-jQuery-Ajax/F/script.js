$("input[name='lat']").val(34)
$("input[name='lng']").val(56)

$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        let serializedstring = $('form').serialize();
        let dayLengthOfTarget = "";
        let dayLengthOfHK = "";
        let latitude = $("input[name='lat']").val();
        let longitude = $("input[name='lng']").val();
        $.get(`https://api.sunrise-sunset.org/json?${serializedstring}`
         ).done(function(data){
            dayLengthOfTarget = data.results.day_length;
            $.get(`https://api.sunrise-sunset.org/json?lat=22.28552&lng=114.15769`
            ).done(function(data){
               dayLengthOfHK = data.results.day_length;
                $('body').append(`the position of  ${latitude} ${longitude} is ${dayLengthOfTarget > dayLengthOfHK? 'longer':'shorter'} than Hong Kong’s day length at this moment.`);        
            });
         });
    }) 
})