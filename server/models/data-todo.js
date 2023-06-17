const { dbCollection } = require('./config')


class Todo {
  /**
   * 增加一条
   * @param title
   * @return {*}
   */
  add(title) {
    const newItem = { title, checked: false }
    return dbCollection.insertOne(newItem)
  }

  /**
   * 查询所有用户文档
   * @param cb
   * @return {*}
   */
  findAll() {
    return dbCollection.find().toArray()
  }
}

module.exports = Todo
