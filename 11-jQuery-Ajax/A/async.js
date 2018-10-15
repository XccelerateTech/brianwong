$(function(){
    $.ajax({
        url:"./server/data.json",
        type: "GET"
    }).done(function(data){
        console.log(data);
    })
})