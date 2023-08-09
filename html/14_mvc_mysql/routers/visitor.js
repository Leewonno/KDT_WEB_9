const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

router.get('/', controller.visitor);

// GET 방명록 하나 조회
router.get('/get', controller.visitorOne);

// POST 방명록 하나 생성
router.post('/write', controller.visitorInsert);

// PATCH 방명록 하나 수정
router.patch('/edit', controller.visitorModify);

// DELETE 방명록 하나 삭제
router.delete('/delete', controller.visitorDelete);

module.exports = router;