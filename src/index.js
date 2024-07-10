'use strict';

const greetingController = require('./controllers/greetingController');


(async function(){
    const output = await greetingController.greet();
    console.log(output);
})();
