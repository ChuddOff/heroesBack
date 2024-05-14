

export default function socketEventRouter(io, socket) {
    socket.on('message', (data)=> {
        io.emit('message', data);
    })
    socket.on('delete', (data)  => {
        io.emit('delete', data);
    })
    socket.on('connection', () => {
        console.log(true);
    })
}