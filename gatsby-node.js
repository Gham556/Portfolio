
const async = require('async');

const BoardGame = require("./src/models/boardGames");
const Genre = require("./src/models/genres");
const Developer = require("./src/models/developers");
const Accessory = require("./src/models/accessories");


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

exports.createInventoryIndex= ({actions}) => {
  const {createPage} = actions
  createPage({
    path: "/index",
    component: require.resolve("./src/templates/index.js"),
    context: {},
    defer: true,
  })
}