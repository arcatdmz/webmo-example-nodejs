var WebmoWs = require('webmo-client-nodejs').ws
var motor = new WebmoWs("webmo.local")

motor.onopen = () => {
  motor.rotate(90)
  setTimeout(() => { motor.stop(); motor.close(); }, 2000)
}