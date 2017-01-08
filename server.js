var express = require('express')
var app = express()

app.use(express.static(__dirname+'/public'))

var server = app.listen(process.env.PORT || 3000, function(){
	console.log('listening on port 3000')
})

var io = require('socket.io')(server)

io.sockets.on('connection', function(socket){
	console.log(`socket connected ${socket.id}`)

	socket.on('msgToServer', function(message){
		console.log(`message received from client: ${message}`)
		io.emit('msgAppendToClient', function(data){
			console.log('qualquer coisa')
		})
	})
})