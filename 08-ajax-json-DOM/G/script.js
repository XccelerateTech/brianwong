let childRemover = function(id){
    let child = document.getElementById(id).firstChild;
    while(child){
        child.remove();
        child = document.getElementById(id).firstChild;
    }
}

childRemover("info-field");