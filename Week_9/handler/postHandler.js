const posts = require('../data/data.js')

function postHandler(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    const allPosts = posts.map(post=>`
       <div style = "border:1px solid; padding:10px">
       <h2>
           ${post.title}
       </h2>
       <p>
        ${post.description}
       </p>
       </div>
    `);
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
            ${allPosts}
        </body>
    </html>
        `)
    
}

module.exports = postHandler;