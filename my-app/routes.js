const routes = require('next-routes')

module.exports = routes()
.add({name: 'post', page: 'post', pattern: encodeURI('/post/:id')})



