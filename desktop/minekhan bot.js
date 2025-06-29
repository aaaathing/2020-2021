//for mutiplayer on willard.fun
function bot(){
  var id = document.querySelector(".world.selected").id
  var ws = new WebSocket("wss://willard.fun/ws?target="+id)
  function send(message, string){
    ws.send(string ? message : JSON.stringify(message))
  }
  ws.onconnect = () => {
    send({type:'connect'})
  }
  ws.onmessage = msg => {
    let packet = JSON.parse(msg.data)
    if(packet.type = "error"){
      console.log("multiplayer error",packet)
    }
  }
  ws.onerror = e => {ws.close(); console.log("websocket error",e)}
  ws.onclose = e => {console.log("websocket connection lost")}
}