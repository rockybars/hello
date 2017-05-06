const {Server} = require('http')
const server = new Server(function (req, res) {
  res.end('OK')
})

module.exports = server
