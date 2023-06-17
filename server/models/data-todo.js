const { dbCollection } = require('./config')


class Todo {
  /**
   * 增加一条
   * @param title
   * @return {*}
   */
  add(title) {
    const newItem = { title, checked: false }
    console.log('添加一个')
    return dbCollection.insertOne(newItem)
  }

  /**
   * 查询所有用户文档
   * @param cb
   * @return {*}
   */
  findAll(cb) {
    console.log('查找全部')
    return dbCollection.find({}, { projection: { name: 'New one' } }).toArray(cb)
  }
}

module.exports = Todo
