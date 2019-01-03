$(function(){
    $('form').submit(e =>{
        e.preventDefault();
        $.post('/room')
    })

    socket.on('return new key',data=>{
        key = data.key;
    })

})