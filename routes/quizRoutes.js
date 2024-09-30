const express = require("express");
const {
 addQuiz,getQuiz,getAllQuiz,updateQuiz,deleteAllQuiz,deleteQuiz
} = require("../controller/quizController");

const router = express.Router();

router.post("/add",addQuiz)
router.get("/get",getAllQuiz)
router.get("/get/:id",getQuiz)
router.delete("/delete",deleteAllQuiz)
router.delete("/delete/:id",deleteQuiz)
router.put("/put/:id",updateQuiz)

module.exports = router;
