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
//like link that will create the record;
// SELECT * FROM items JOIN items_users on items.id= items_users.item_id and items_users.user_id=1

app.get("api/favorites", (req, res, next) => {
  knex("items").select("item.id", "item.url");
});
app.get("/api/images", (req, res, next) => {
  // knex("images").then(images => res.json({ images: images }));
  knex("images")
    .select(
      "images.id",
      "images.url",
      "items.id as item_id",
      "items.name",
      "items.url as item_url",
      "items.description",
      "items_users.id as favorite_id"
    )
    .leftJoin("images_items", "images.id", "images_items.image_id")
    .leftJoin("items", "images_items.item_id", "items.id")
    // .leftJoin("items_users", "items.id", "items_users.item_id")
    .leftJoin("items_users", function() {
      this.on("items.id", "=", "items_users.item_id").andOn(
        "items_users.user_id",
        "=",
        1
      );
    })
    .then(originalResults => {
      console.log(originalResults);
      const result = originalResults.reduce((collection, image, index) => {
        // if the id of image is the same as the last item in collection
        // push it into items
        if (index !== 0 && image.id === collection[collection.length - 1].id) {
          collection[collection.length - 1].items.push({
            id: image.item_id,
            name: image.name,
            url: image.item_url,
            liked: image.favorite_id ? true : false
          });
        } else {
          // else create a new book
          const { id, url, item_id, name, item_url } = image;
          let newImage = { id, url, items: [] };
          item_id
            ? newImage.items.push({
                id: item_id,
                url: item_url,
                name,
                liked: image.favorite_id ? true : false
              })
            : null;
          collection.push(newImage);
        }
        return collection;
      }, []);
      res.json({ images: result });
    });
});

app.use("/api/items", require("./routes/items"));

app.get("/", (req, res, next) => {
  const index = path.join(__dirname, "../client/build/index.html");
  res.sendFile(index);
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
