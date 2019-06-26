//testing route
module.exports = (app) => {
  app.post("/api/signup", (req, res) => {
    console.log(req.body)
  });
}