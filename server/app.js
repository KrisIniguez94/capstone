const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3004;
const listener = () => console.log(`Server is running on port ${port}`);
const knex = require("../db/knex");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/images", (req, res, next) => {
  // knex("images").then(images => res.json({ images: images }));
  knex("images")
    .select(
      "images.id",
      "images.url",
      "items.id as item_id",
      "items.name",
      "items.url as item_url"
    )
    .leftJoin("images_items", "images.id", "images_items.image_id")
    .leftJoin("items", "images_items.item_id", "items.id")
    .then(originalResults => {
      console.log(originalResults);
      const result = originalResults.reduce((collection, image, index) => {
        // if the id of image is the same as the last item in collection
        // push it into items
        if (index !== 0 && image.id === collection[collection.length - 1].id) {
          collection[collection.length - 1].items.push({
            id: image.item_id,
            name: image.name,
            url: image.item_url
          });
        } else {
          // else create a new book
          const { id, url, item_id, name, item_url } = image;
          let newImage = { id, url, items: [] };
          item_id
            ? newImage.items.push({ id: item_id, url: item_url, name })
            : null;
          collection.push(newImage);
        }
        return collection;
      }, []);
      res.json({ images: result });
    });
});

app.get("/", (req, res, next) => {
  const index = path.join(__dirname, "../client/build/index.html");
  res.sendFile(index);
});

app.post("/api/users", (req, res, next) => {
  res.status(200).json({
    name: "Kris",
    email: "Kris.Iniguez.94@gmail.com"
  });
});
// handle error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err });
});
// not found
app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not found." } });
});

app.listen(port, listener);
