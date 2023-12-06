const jsonServer  = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

require("dotenv").config();

server.use(function(req, res, next){
    setTimeout(next, 2000);
});
server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
    console.log("JSON SERVER is running");
});