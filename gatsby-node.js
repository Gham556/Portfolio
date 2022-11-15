const mongoose = require("mongoose");
const mongoDB = 'mongodb+srv://Gham556:Fotheringham556@cluster0.mbba2nz.mongodb.net/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose Connection error:"));

const BoardGame = require("../models/boardGames");
const Genre = require("../models/genres");
const Developer = require("../models/developers");
const Accessory = require("../models/accessories");)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  },
  )
}

exports.InventoryIndex = (req, res) => {
  async.parallel(
      {
          boardGame_count(callback) {
              BoardGame.countDocuments({}, callback);//pass empty object to find all documents of this collection
          },
          genre_count(callback) {
              Genre.countDocuments({}, callback);
          },
          developer_count(callback) {
              Developer.countDocuments({}, callback);
          },
          accessory_count(callback) {
              Accessory.countDocuments({}, callback);
          } 
      },
      (err, results) => { 

      }
    )};
  
exports.createInventoryIndex= ({actions}) => {
  const {createPage} = actions
  createPage({
    path: "/index",
    component: require.resolve("./src/templates/index.js"),
    context: {},
    defer: true,
  })
}