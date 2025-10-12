const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});
