const express = require('express');
const { getAndIncrementVisitor } = require('../controller/visitor.controller.js');

const router = express.Router();
router.get('/', getAndIncrementVisitor);

module.exports = router;