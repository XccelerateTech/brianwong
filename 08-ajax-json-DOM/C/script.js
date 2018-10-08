function whoIsSpace(callback){
    let http = new XMLHttpRequest();

    http.open("GET","http://api.open-notify.org/astros.json",true);

    http.onreadystatechange = function(){
        if (http.readyState != XMLHttpRequest.DONE){
            return;
        }else if(http.status == 200){
            let parsedObject = JSON.parse(http.responseText);
            callback(parsedObject.people.map(function(n){
                return n.name
            }));
        }else{
            console.log('error occurred' + http.status);
        }
    }

    http.send();
}

whoIsSpace(function(data){
    console.log(data)
});

