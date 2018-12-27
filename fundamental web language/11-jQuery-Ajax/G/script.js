$("input[name='country1']").val('japan')
$("input[name='country2']").val('germany');
$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        let country_SunsetSunRise = [];
        let country1 = $("input[name='country1']").val();
        let country2 = $("input[name='country2']").val();
        let defer1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`)
        let defer2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`)

        $.when(defer1,defer2).done(function(result1,result2){
            let compare = ["Sunset" , "Sunrise"];
            let latlng_country1 = result1[0][0].latlng;
            let latlng_country2 = result2[0][0].latlng;
            let findSunsetSunRise1 = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng_country1[0]}&lng=${latlng_country1[1]}`);
            let findSunsetSunRise2 = $.get(`https://api.sunrise-sunset.org/json?lat=${latlng_country2[0]}&lng=${latlng_country2[1]}`);
            $.when(findSunsetSunRise1,findSunsetSunRise2).done(function(data1,data2){
                findSunsetSunRise(data1,country1);
                findSunsetSunRise(data2,country2);
                for(index in compare){
                    index = Number(index);
                    let diff = convertTimeToSeoncd(country_SunsetSunRise[0][index+1]) - convertTimeToSeoncd(country_SunsetSunRise[1][index+1]);
                    $('body').append(`${compare[index]} of ${country1} is ${diff>0? 'later':'eariler'} than ${country2} by ${diff>0? convertSecondToTime(diff):convertSecondToTime(-diff)}<br>`)
                }
            })

        })

        function findSunsetSunRise(list,name){
                let sunsetTime = list[0].results.sunset;
                let sunriseTime = list[0].results.sunrise;
                country_SunsetSunRise.push([name,sunsetTime,sunriseTime]);
        }

        function convertTimeToSeoncd(time){
            time = time.split(" ");
            let times = time[0].split(":")
            times = times.map(function(n){
                return Number(n);
            })
            if (time[1] == 'PM'){
                times[0] +=12;
            }
            let second = times[0]*60*60+times[1]*60+times[2];
            return second;
        }

        function convertSecondToTime(second){
            let hour = parseInt(second/60/60);
            let minute = parseInt(second/60-hour*60);
            let secondLeft = parseInt(second-minute*60-hour*60*60);
            if (hour < 10){
                hour = "0"+hour;
            }
            if (minute < 10){
                minute = "0"+minute;
            }
            if (secondLeft < 10){
                secondLeft = "0"+secondLeft;
            }
            return `${hour}:${minute}:${secondLeft}`;
        }
    })
})



