const { mongoose } = require("../libs/db_connection");
const Schema = mongoose.Schema;

const commentsSchema = Schema({
  postId: { type: Schema.type.objectId, ref: "Post" },
  userId: { type: Schema.type.objectId, ref: "User" },
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;
