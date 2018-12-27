let drippingTap =  setInterval(function(){
        console.log("drops");
    },1000);


function turnOffTap(){
    clearInterval(drippingTap);
}

$(document).ready(function(){
    $('button').click(function(){
        turnOffTap();
    })
})
