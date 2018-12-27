class User{
    constructor(options){
        this.firstName = options.name.first;
        this.lastName = options.name.last;
        this.email = options.email;
        this.dateOfBirth = options.dob;
    }
}

function userGenerator(){
    let http = new XMLHttpRequest();
    http.open("GET","https://randomuser.me/api/?results=8",true);

    http.onreadystatechange = function (){
        if (http.readyState != XMLHttpRequest.DONE){
            return;
        } else if (http.status == 200){
            let parsedObject = JSON.parse(http.responseText);
            let users = parsedObject.results.map(function(data){
                let user = new User(data);
                return user;
            })
            console.log(users);

        }else{
            console.log('error occurred' + http.status)
        }
    }

    http.send();
}

userGenerator();





