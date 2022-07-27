const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

//create associations... allows a user to have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Defining the realtionship of post model to User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

//Connecting User and Post in a many-to-many relationship using belongsToMany()
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

//connecting post to vote and user to vote
Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });


module.exports = { User, Post, Vote };