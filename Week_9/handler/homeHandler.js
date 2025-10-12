function homeHandler(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
           <title>Home</title>
        </head>
        <body>
           <h1>Welcome to My Blog Page</h1>
           <nav>
              <a href = "/">Home</a>
              <a href = "/posts">Posts</a>
              <h2>
                This is My Home Page
              </h2>
            </nav>
        </body>
    </html>
    `);
}

module.exports = homeHandler;