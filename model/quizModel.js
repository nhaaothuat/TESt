// đây là nơi chứa database.
// Quiz: Represents a quiz or a test.
// •	Object_id: Unique identifier for the quiz.
// •	title: Title or name of the quiz.
// •	description: Description or instructions for the quiz.
// •	questions: An array of question IDs associated with the quiz.
//npm i mongoose

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
     //id khỏi cần do vào mongo thì nó tự tạo
     title:{type: String, required:true},
     description:{type: String, required:true},
     questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
    // module.exports = mongoose.model("Question", questionSchema); cái này nó liên kết cái question nè!!

})
module.exports = mongoose.model("Quiz",quizSchema)

