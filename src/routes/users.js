function UserRouter(app) {
  app.get("/Username", (req, res) => {
    res.send("Username Route");
  });

  app.post("/profile", (req, res) => {
    console.log(req.body);
    res.send("Profile");
  });
}

module.exports = UserRouter