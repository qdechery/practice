var Profile = require("./profile.js");

// Handle HTTP route GET / and POST / i.e. Home
function home(request, response) { 
  //if url == "/" && GET
    //show search
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write("Header\n");
  response.write("Search\n");
  response.end("Footer\n");
}
  
// Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
   //if url == "/...."
  var username = request.url.replace("/", "");
  if(userame.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    
    //get json from Treehouse    
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
    //show profile 
      
      
    });
    
    //on "error"  
    studentProfile.on("error", function(error){
      //show error    
    });
    
    response.write(username + "\n");
    response.end("Footer\n");
  }
        
     
}
  


module.exports.home = home;
module.exports.user = user;