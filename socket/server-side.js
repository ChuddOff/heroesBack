
/**
 * Роутер для ивентов клиент-сервер
 * @param {io} io - Сервер со всеми подключениями
 * @param {socket} socket - Отдельно взятый подклчюенный клиент (websocket)
 */
function socketEventRouter(io, socket) {
    socket.on("connection", () => {
        // Попадаем сюда после вызова события "connection" в файле client-side

        socket.emit("ok", "message") // Вызываем на клиенте кастомный ивент "ok"
    })

    // Широковещательная рассылка 
    socket.on("all", (data) => {
        // Данные так же может передавать клиент.
        // Data - универсальное название. можно написать хоть abac 

        // Вызываем у ВСЕХ клиентов, подключенных к серверу ивент "message", в качестве сообщения передаем объект data
        io.emit("message", data)
    })

    // Приватные комнаты. 
    socket.on("secret", (data) => {
        const { roomName, roomPassword } = data // Вытягиваем название комнаты и пароль. 

        const room = `${roomName}-${roomPassword}` // Объеденяем данные, генерируем название комнаты: комната-пароль 

        socket.join(room) // Подключаем клиент к комнате. 
    })

    socket.on("secretMessage", (data) => {
        const { roomName, roomPassword, message } = data // Вытягиваем нужные данные из объекта data 

        const room = `${roomName}-${roomPassword}` // Вновь генерируем комнату. 

        // У всех клиентов (сокетов) которые подключены к комнате room вызываем ивент secretMessage, передаем сообщение переменной message
        io.to(room).emit("secretMessage", message) // События могут быть названы одинаково на клиенте и на сервере
    })
}