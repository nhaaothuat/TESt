

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  //id khỏi cần do vào mongo thì nó tự tạo
  text: { type: String, required:true },
  options: { type: [String], required:true },
  keywords: { type: [String], required:true },
  correctAnswer: { type: [Number], required:true },
});
module.exports = mongoose.model("Question", questionSchema);
