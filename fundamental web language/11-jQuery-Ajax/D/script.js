$(document).ready(function(){
    $("form").submit(event => {
        event.preventDefault();
        let latitude = $("input[name='latitude']").val();
        let longitude = $("input[name='longitude']").val();z
        $.get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
        ).done(function(data){ //data is javascript already
            let sunrise = data.results.sunrise;
            let sunset = data.results.sunset;
            console.log(`In location of ${latitude} ${longitude}, the sunrise time is ${sunrise} and the sunset time is ${sunset}`)

        })
    })
})


