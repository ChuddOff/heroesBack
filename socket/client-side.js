socket.emit("connection") // Вызываем кастомный ивент "connection" на сервере 

socket.on("ok", (data) => {
    // Data - Любые данные, переданные сервером. Попадаем в этот callback когда сервер выполнит socket.emit("ok")
    console.log(data) // В консоли будет выведено "message"
})

// В качестве переданного аргумента может быть и обычный объект.
socket.emit("message", { foo: "bar" })

socket.on("message", (data) => {
    console.log(data.foo) // bar  
})

// Подключаемся к приватной комнате. 
socket.emit("secret", { roomName: "комната", roomPassword: "пароль" })

// Отправляем сообщение, которое получат только те, кто в нашей комнате. 
socket.emit("secretMessage", {
    roomName: "комната", roomPassword: "пароль", message: "че"
})

socket.on("secretMessage", (data) => {
    console.log(data) // че
})