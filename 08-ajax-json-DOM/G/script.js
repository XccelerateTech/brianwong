let childRemover = function(id){
    targetElement = document.getElementById(id);
    for(let child of targetElement.children){
        child.remove();
    }
}

childRemover("info-field");