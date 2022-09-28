//import models
const Post = require("./Post");
const Reaction = require("./Reaction");
const User = require("./User");


//Post belongsTo User
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//User hasMany Posts
User.hasMany(Post, {
<<<<<<< HEAD
  foreignKey: "user_id",
=======
  foreignKey: "category_id",


//Post belongsTo User
Post.belongsTo(User, {
  foreignKey: "category_id",
  onDelete: "CASCADE",

>>>>>>> 7732d13079483febf69caa76efe162f395a586d0
});

//Reaction block would go here
