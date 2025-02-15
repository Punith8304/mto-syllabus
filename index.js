import express from "express"

const app = express()

app.use(express.static("public"));
app.get("/", (req, res) => {
    //Step 1 - Make the get route work and render the index.ejs file.
    res.render("index.ejs");
  });
app.get("/e2s2", (req, res) => {
    res.render("partials/primaryunit.ejs")
})
app.get("/e3s1", (req, res) => {
    res.render("partials/secondaryunit.ejs")
})
app.listen(8000, (req, res) => {
    console.log("Server running on port 8000")
})