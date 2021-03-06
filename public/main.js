var socket = io.connect('https://chaennode.herokuapp.com/', { 'forceNew': true });
//http://complexribi12.ddns.net:80
//http://189.130.171.6:5357
//https://chaennode.herokuapp.com/
//Parte del cliente conectamos con localhost
//escuchamos el evento messages
// data tendr� el array de mensajes  que env�a el servidor
socket.on('messages', function(data) {  
  console.log(data);
  render(data);
})
// esta función se encarga de pintar en el HTML los mensajes
function render (data) {  
  var html = data.map(function(elem, index) {
    return(`
            <p>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </p>
            <br>
            `);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {  
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}