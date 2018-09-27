const bodyparser = require('body-parser')
const express = require('express')
const PORT = process.env.PORT || 3000

const graphqlHTTP = require('express-graphql')
const schema = require('../gateway/note/graphQL/Schema')

const cors = require('cors')
const app = express()
app.use('*', cors({
  credentials: true
}))
app.use(bodyparser())
app.use('/graphql', graphqlHTTP( {schema, graphiql: true} ))
app.listen(PORT)