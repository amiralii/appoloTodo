const graphqlTools = require('graphql-tools')
const resolvers = require('./Resolvers')
const typeDefs = `
enum priorities{
  HIGH
  MEDIUM
  LOW
}
enum status{
  DONE
  PENDING
}
type Note {
 id: ID! 
 text: String!
 date: Int!
 priority: priorities!
 status: status!
}
type Query {
  notes: [Note] 
}
type Mutation{
 sendNote(text: String!,priority: priorities!,status: status!,date: Int!): [Note]
 updateNote(id:Int!,text: String!,priority: priorities!,status: status!,date: Int!): [Note]
 deleteNote(id: Int!): [Note]
}
`
module.exports = graphqlTools.makeExecutableSchema({ typeDefs, resolvers })