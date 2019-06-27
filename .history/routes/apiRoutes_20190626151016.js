//testing route for ajax
module.exports = (app) => {
  app.post("/api/signup", (req, res) => {
    //create new db entry here
    console.log(req.body);
  });

  app.post("/api/login", (req, res) => {
    //query db to find user login credentials here
    console.log(req.body);
  });
};