// const path = require("path");
// const express = require("express");
// const session = require("express-session");
// const exphbs = require("express-handlebars");
// const helpers = require('./utils/helpers');

//import models
const Post = require("./Post");
const Reaction = require("./Reaction");
const User = require("./User");

//Post belongsTo User
Post.belongsTo(User, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// const app = express();
// const PORT = process.env.PORT || 3001;

// const sequelize = require("./config/config");
