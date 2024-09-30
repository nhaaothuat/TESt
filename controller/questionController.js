const questionSchema = require("../model/questionMode");
const mongoose = require("mongoose");

const getAllQuestion = async (req, res) => {
  const question = await questionSchema.find({});

  res.json(question);
};

const getQuestion = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No id question is invalid!!!" });
  }

  const question = await questionSchema.findById(id);

  if (!question) {
    return res.json({ error: "No question is founded!!" });
  }

  res.json(question);
};

const addQuestion = async (req, res) => {
  const { text, options, keywords, correctAnswer } = req.body;

  try {
    const newQuestion = new questionSchema({
      text,
      options,
      keywords,
      correctAnswer,
    });

    await newQuestion.save();

    res.json({
      message: "Câu hỏi đã được thêm thành công.",
      question: newQuestion,
    });
  } catch (error) {
    console.error(error);
    res.json({ message: "Lỗi khi thêm câu hỏi.", error });
  }
};

const deleteQuestion = async(req,res)=>{
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No valid id" });
  }

  const question = await questionSchema.findOneAndDelete({ _id: id });

  if (!question) {
    return res.json({ error: "No question or error" });
  }

  res.json("Delete successfully");
}

const deleteAllQuestion = async(req,res)=>{
  const question = await questionSchema.deleteMany({});

  if (!question) {
    return res.json({ error: "No found" });
  }

  res.json("Delete successfully");
}

const updateQuestion = async(req,res)=>{
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: " id invalid" });
  }

  const question = await questionSchema.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  if (!question) {
    return res.json({ error: "No question found" });
  }

  res.json("Update successs");
}

module.exports = {
  getAllQuestion,
  getQuestion,
  addQuestion,
  deleteAllQuestion,
  deleteQuestion,
  updateQuestion
};
