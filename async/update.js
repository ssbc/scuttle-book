const isBookUpdate = require('../sync/isBookUpdate')()

module.exports = function (server) {
  return function (bookId, attributes, cb) {
    let msg = Object.assign({
      "type": "bookclubUpdate",
      "updates": bookId
    }, attributes)

    if (!isBookUpdate(msg)) return cb(isBookUpdate.errors)

    server.publish(msg, cb)
  }
}
