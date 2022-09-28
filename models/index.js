//import models
const Post = require("./Post");
// const Reaction = require("./Reaction");
const User = require("./User");

//Post belongsTo User
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//User hasMany Posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//Reaction block would go here

//module.exports
module.exports = {
  User,
  Post,
};
