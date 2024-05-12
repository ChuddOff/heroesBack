

export default function socketEventRouter(io, socket) {
    socket.on('message', (data)=> {
        io.emit('message', data);
    })
}