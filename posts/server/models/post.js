var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/posts', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;