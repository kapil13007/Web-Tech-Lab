function noPageHandler(req,res){
    res.writeHead(404,{'Content-Type':'text/html'});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
           <title>Page Not Found</title>
        </head>
        <body>
        <h2>404 page not found go back</h2>
        <a href = "/">back to Home</a>
        </body>
        </html>
        `);
}
module.exports = noPageHandler;