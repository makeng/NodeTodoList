const { dbCollection } = require('./config')
const { ObjectId } = require('mongodb')


class Todo {
  create(title) {
    const newItem = { title, checked: false }
    return dbCollection.insertOne(newItem)
  }

  read() {
    return dbCollection.find().toArray()
  }

  delete(id) {
    const params = { _id: new ObjectId(id) }
    return dbCollection.deleteOne(params)
  }

  update(target) {
    const { _id, ...modified } = target
    const filter = { _id: new ObjectId(_id) }
    const doc = { $set: modified }
    return dbCollection.updateOne(filter, doc)
  }
}

module.exports = Todo
