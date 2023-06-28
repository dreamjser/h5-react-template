// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./json_server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)
router.render = (req, res) => {
  res.jsonp({
    errorCode: '0',
    errorMsg: 'success',
    data: res.locals.data
  })
}

server.listen(4001, () => {
  console.log('JSON Server is running')
})
