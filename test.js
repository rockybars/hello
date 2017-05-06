const request = require('tarik')
const test = require('tape')
const server = require('./')

function listen () {
  return new Promise(function (resolve, reject) {
    server.listen(function (err) {
      if (err) {
        return reject(err)
      }
      resolve(server.address())
    })
  })
}

test('ok', function (t) {
  listen()
    .then(function ({port}) {
      return request(`http://localhost:${port}`)
    })
    .then(function ({statusCode, body}) {
      t.equal(statusCode, 200)
      t.equal(body, 'OK')
      t.end()
      server.close()
    })
})

test('ok', function (t) {
  listen()
    .then(function ({port}) {
      return request(`http://localhost:${port}`)
    })
    .then(function ({statusCode, body}) {
      t.equal(statusCode, 200)
      t.equal(body, 'OK')
      t.end()
      server.close()
    })
})

test('ok', function (t) {
  listen()
    .then(function ({port}) {
      return request(`http://localhost:${port}`)
    })
    .then(function ({statusCode, body}) {
      t.equal(statusCode, 200)
      t.equal(body, 'OK')
      t.end()
      server.close()
    })
})
