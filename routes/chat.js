let express = require('express');
let router = express.Router();
let http = require('http').Server(express);
let io = require('socket.io')(http);

// router.get('/', function(req, res){
//     res.sendFile('chat.html', { root: path.join(__dirname, '../public/views/') });
// });
//
// io.on('connection', function(socket){
//     console.log('a user connected');
// });
// //
// http.listen(3000, function(){
//     console.log('listening on *:3000');
// });

module.exports = router;
