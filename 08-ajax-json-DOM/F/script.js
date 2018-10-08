let classArray = function(classname){
    let array = [];
    let class_collection = document.getElementsByClassName(classname);
     for(let i = 0; i < class_collection.length;i++){
        array.push(class_collection[i])
     }
     return array;
}

console.log(classArray("content-section"))