- run two functions on fetching a request
  app.get('/',(req,res,next) => {
  ...
  next();} // 1
  ,
  (req,res) => {...} //2
  );

run 2 after you run 1
works as compoundDidMount
do all your proccess and check if it is okay to go to next fxn
then call next and execute next wala function

Middleware -- chaining functions onto routes taaki koi ek function chale hmesha sbse phle for auth

-if next() toh woh next wale fxn pe jaega then ussi fxn k next k aage k execute krega

-app.use(function); will use above fxn as middleware for all routes

- agar function ko sabse phle use ho toh.. saare routes k phle
  agar last m use toh last mei likhte

NOTE : get call is cached but post is not

- (imp)
  Convert/Parse passed post data to json(req.body)
  npm install -save 'body-parser'

  const bodyparser = require('body-parser');
  app.use('bodyparser'); // used as middleware /// first every function

- to read formData :

  app.use(
  bodyparser.urlencoded({extended : true});
  );

- to read json :

  app.use(
  bodyparser.json()
  );

Conclusion :

    next
    app.use
    bodyparser
    post calls are used for passwords as it isn't cached and is more secured
    get calls are cached
