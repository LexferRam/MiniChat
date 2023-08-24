cdns: https://cdnjs.com/libraries/socket.io
npm : https://www.npmjs.com/package/socket.io 

proceso de comunicacion:

1. cliente emite un evento 
```js 
socket.emit('evento', data)
```

2. servidor escucha el evento
```js 
socket.on('evento', data)
```

**project URL**: https://mini-chat-lexfer.onrender.com/