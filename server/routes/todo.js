const express = require('express')
const router = express.Router()
const Todo = require('../models/data-todo')

const todo = new Todo()


router.get('/save', function (req, res, next) {
  const { title } = req.query
  todo.add(title)
  res.send(true)
})

router.get('/all', async function (req, res, next) {
  const fond = await todo.findAll()
  res.send(fond)
})

module.exports = router
