$(document).ready(function(){
    let informMe = function(endpoint,value){
        $.ajax({
            url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,
            type:"GET"
        }).done(function(data){
            console.log(data);
        }).fail(function(){
            console.log("ERROR")
        })
    };

    informMe("lang","es");
})