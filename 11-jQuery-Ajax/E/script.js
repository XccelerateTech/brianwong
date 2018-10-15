$("input[name='lat']").val(34)
$("input[name='lng']").val(56)

function convertToHMS(milliseconds){
    let hour = parseInt(milliseconds*0.001/60/60);
    let minute = parseInt(milliseconds*0.001/60-hour*60);
    let second = parseInt(milliseconds*0.001-minute*60-hour*60*60);
    if (hour < 10){
        hour = "0"+hour;
    }
    if (minute < 10){
        minute = "0"+minute;
    }
    if (second < 10){
        second = "0"+second;
    }
    return `${hour}:${minute}:${second}`;
}


$(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let serializedString = $("form").serialize();
        $.get(`https://api.sunrise-sunset.org/json?${serializedString}&formatted=0&date=yesterday`
        ).done(function(data){
            let sunsetTime = new Date(data.results.sunset);
            let sunriseTime = new Date(data.results.sunrise);
            let current = new Date();
            let timeFromSunset =  current.getTime() - sunsetTime.getTime();
            let timeFromSunrise = current.getTime() - sunriseTime.getTime();
            $('body').append(`the time from the yesterday sunrise to now: ${convertToHMS(timeFromSunrise)}
the time from the yesterday sunset to now: ${convertToHMS(timeFromSunset)}<br>`)
        })

        let tommorow = new Date(Date.now()+24*60*60*1000);
        let tommorowYear = tommorow.getFullYear();
        let tommorowMonth = tommorow.getMonth()+1;
        let tommorowDay = tommorow.getDate();

        $.get(`https://api.sunrise-sunset.org/json?${serializedString}&formatted=0&date=${tommorowYear}-${tommorowMonth}-${tommorowDay}`
        ).done(function(data){
            let sunsetTime = new Date(data.results.sunset);
            let sunriseTime = new Date(data.results.sunrise);
            let current = new Date();
            let timeFromSunset =  sunsetTime.getTime() - current.getTime();
            let timeFromSunrise = sunriseTime.getTime() - current.getTime();
            $('body').append(`the time from now to the tommorow sunrise: ${convertToHMS(timeFromSunrise)}
the time from now to the tommorow sunset: ${convertToHMS(timeFromSunset)}`)
        })
    })
})