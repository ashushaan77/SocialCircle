const { mongoose } = require("../libs/db_connection");
const Schema = mongoose.Schema;
const postSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  photos: { type: Schema.Types.ObjectId, ref: "Photos" },
  videos: { type: Schema.Types.ObjectId, ref: "Videos" },
  likes: { type: Schema.Types.ObjectId, ref: "Likes" },
  comments: { type: Schema.Types.ObjectId, ref: "Comments" },
  postType: { type: String, enum: ["Real", "Shared"], default: "Real" },
  createdAt: { type: Date, default: Date.now },
  post_status: {
    type: String,
    enum: ["Active", "Inactive", "Removed"],
    default: "Active",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
