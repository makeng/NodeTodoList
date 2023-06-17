const express = require('express')
const router = express.Router()
const Todo = require('../models/data-todo')

const todo = new Todo()

/* GET users listing. */
router.get('/', function (req, res, next) {
  todo.add('New one')
  todo.findAll((err, docs) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('查找', docs)
    const todoListStr = JSON.stringify(docs, null, 2)
    console.log(todoListStr)
    res.render('index', { documents: docs })
  })

  res.send('查找')
})

module.exports = router
