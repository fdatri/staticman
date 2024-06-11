try {
  const express = require('express')
  const cors = require('cors')
  const StaticmanAPI = require('./server')

  const app = express()
  app.use(cors())

  const api = new StaticmanAPI()

  api.start(port => {
    app.listen(port, () => {
      console.log('Staticman API running on port', port)
    })
  })
} catch (e) {
  console.error(e)
}
