var WebmoWs = require('webmo-client').ws
var motor = new WebmoWs("webmo.local")

motor.onopen = () => {
  motor.rotate(90)
  setTimeout(() => { motor.stop(); motor.close(); }, 2000)
}

/*

このコードは Node.js で実行すると以下のようなエラーで落ちます:

.\node_modules\qwest\src\qwest.js:5
    var global = typeof window != 'undefined' ? window : self,
                                                         ^
ReferenceError: self is not defined
    at .\node_modules\qwest\src\qwest.js:5:55
    at Object.<anonymous> (.\node_modules\qwest\src\qwest.js:501:2)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (.\node_modules\webmo-client\lib\http.js:1:75)
    
*/
