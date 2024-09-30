const quizSchema = require("../model/quizModel");
const mongoose = require("mongoose");
const questionSchema = require("../model/questionMode");
const getAllQuiz = async (req, res) => {
  const quiz = await quizSchema.find({}).populate("questions");

  res.json(quiz);
};

const getQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No id question is invalid!!!" });
  }

  const quiz = await quizSchema.findById(id).populate("questions");

  if (!quiz) {
    return res.json({ error: "No quiz is founded!!" });
  }

  res.json(quiz);
};

const addQuiz = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const existingQuestions = await questionSchema.find({
      _id: { $in: questions },
    });
    if (existingQuestions.length !== questions.length) {
      return res
        .status(400)
        .json({ message: "ID này không có trong database" });
    }

    const newQuiz = new quizSchema({
      title,
      description,
      questions: questions,
    });

    await newQuiz.save();
    res.json({ message: "Quiz added successfully", quiz: newQuiz });
  } catch (error) {
    console.error(error);
    res.json({ message: "Error adding quiz" });
  }
};

const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: "No valid id" });
  }

  const quiz = await quizSchema.findOneAndDelete({ _id: id });

  if (!quiz) {
    return res.json({ error: "No question or error" });
  }

  res.json("Delete successfully");
};

const deleteAllQuiz = async (req, res) => {
  const quiz = await quizSchema.deleteMany({});

  if (!quiz) {
    return res.json({ error: "No found" });
  }

  res.json("Delete successfully");
};

const updateQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.json({ error: " id invalid" });
  }

  const quiz = await quizSchema.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {
      new: true,
    }
  );
  if (!quiz) {
    return res.json({ error: "No question found" });
  }

  res.json("Update successs");
};

module.exports = {
  getAllQuiz,
  getQuiz,
  addQuiz,
  deleteAllQuiz,
  deleteQuiz,
  updateQuiz,
};
