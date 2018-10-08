function informMe(endpoint,value,callback){
    let http = new XMLHttpRequest();

    http.open("GET",`https://restcountries.eu/rest/v2/${endpoint}/${value}`,true);
    
    http.onreadystatechange = function() { //automatically call for 
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {  //good practice to the response inside here, because server take time to give response, 
                                        //and data.responseText may return empty if call it before server return response
            console.log(callback(http));
        } else {
            console.log('error occurred' + http.status);
        }
    };
    http.send();

}

let callback = function(data){
    console.log(data.responseText);
}

informMe("capital",'tallinn',callback);



