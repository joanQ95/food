//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
////
///
const { conn } = require('./src/db.js');
const { callDiets } = require('./src/controllers/callapi.js')    
// Syncing all the models at once.
const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {  
  server.listen(PORT, () => {
    //agregar otra funcion
    callDiets();
    
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
