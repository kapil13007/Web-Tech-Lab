const homeHandler = require('./handler/homeHandler.js');
const postHandler = require('./handler/postHandler.js');
const noPageHandler = require('./handler/noPageHandler.js');

function router(req,res){
    const{url,method} = req;

    if(method === "GET" && url ==='/'){
        homeHandler(req,res);
    }
    else if(method === "GET" && url === "/posts"){
        postHandler(req,res);
    }
    else{
        noPageHandler(req,res);
    }
}

module.exports = router;