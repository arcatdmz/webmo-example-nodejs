var WebmoHttp = require('webmo-client-nodejs').http
var motor = new WebmoHttp("webmo.local")
process.stdout.write('testing http client ...');

motor.rotate(-90)
.then(() => {
  setTimeout(() => {
    motor.stop()
    .then(() => {
      process.stdout.write(' ok\n');
    });
  }, 2000);
});