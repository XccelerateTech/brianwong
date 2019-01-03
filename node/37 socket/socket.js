let rooms = []

module.exports = (server) =>{
    const io = require('socket.io')(server);

    io.on('connection',socket=>{
        socket.on('creat new chatroom',()=>{
            let random = (Math.floor(Math.random()*10000)).toString()
            let existedRoom = rooms.filter(room=>{
                return room == random;
            })

            if (existedRoom===[]){
                rooms.append(random);
            }

            socket.emit('return new key',{key:random})
        })

        socket.on('go to room',data=>{
        
        })
    })
}
