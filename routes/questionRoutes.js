const express = require("express");
const {
 addQuestion,getAllQuestion,getQuestion,deleteAllQuestion,deleteQuestion,updateQuestion
} = require("../controller/questionController");

const router = express.Router();

router.post("/add",addQuestion)
router.get("/get",getAllQuestion)
router.get("/get/:id",getQuestion)
router.delete("/delete",deleteAllQuestion)
router.delete("/delete/:id",deleteQuestion)
router.put("/put/:id",updateQuestion)

module.exports = router;
