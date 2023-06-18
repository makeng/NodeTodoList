const express = require('express')
const router = express.Router()
const Todo = require('../models/data-todo')

const todo = new Todo()


router.post('/', function (req, res, next) {
  const { title } = req.body.params

  todo.create(title)
  res.send(true)
})

router.put('/', function (req, res, next) {
  const { params } = req.body

  todo.update(params)
    .then(() => res.send(true))
})

router.get('/', async function (req, res, next) {
  const fond = await todo.read()
  res.send(fond)
})

router.delete('/', function (req, res, next) {
  const { id } = req.query
  todo.delete(id)
    .then(() => res.send(true))
})

module.exports = router
