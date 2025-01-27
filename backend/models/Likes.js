const { mongoose } = require("../libs/db_connection");
const Schema = mongoose.Schema;

const likesSchema = Schema({
  postId: { type: Schema.type.objectId, ref: "Post" },
  userId: { type: Schema.type.objectId, ref: "User" },
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Likes = mongoose.model("Likes", likesSchema);

module.exports = Likes;
