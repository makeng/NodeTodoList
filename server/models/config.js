const { MongoClient } = require('mongodb')

const CONFIG = {
  LOCAL_DB: 'mongodb://localhost:27017',
  DB: 'local',
  COLLECTION: 'todo',
}


/**
 * 连接 MongoDB 数据库，创建可用集合
 * @return {*}
 */
function createCollection() {
  const uri = CONFIG.LOCAL_DB
  const client = new MongoClient(uri)
  client.connect()
  return client.db(CONFIG.DB).collection(CONFIG.COLLECTION)
}

const dbCollection = createCollection()

module.exports = {
  dbCollection,
}
