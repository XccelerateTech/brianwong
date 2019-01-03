$(function(){
    let socket = io.connect('http://localhost:8000')

    $('form').submit(e=>{
        e.preventDefault();
        let key = $('input#key').val()
        socket.emit('go to room',{key:key});
    })
})