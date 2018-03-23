var express = require('express');
var router = express.Router();
var http = require('http').Server(express);
var io = require('socket.io')(http);

router.get('/', function(req, res){
    res.sendFile('chat.html', { root: path.join(__dirname, '../public/views/') });
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

module.exports = router;
