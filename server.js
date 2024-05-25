const express = require("express");
const fileForge = require("express-fileforge");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "myFiles")));

app.post("/upload/:filename", async (req, res) => {
  const fileName = req.params.filename;
  if (fileName != null || fileName.length > 0 || fileName != undefined) {
    try {
      let uploadedFile = await fileForge.saveFile(req, path.resolve(__dirname), "myFiles", fileName);
      res.end(`File uploaded with success: ${uploadedFile}`);
    } catch (err) {
      console.error(error);
      res.status(500).end("Internal Server Error");
    }
  }
});

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(3000, function() {
  console.log("Server is running");
});
