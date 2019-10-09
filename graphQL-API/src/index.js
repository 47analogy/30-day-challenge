const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { prisma } = require('./generated/prisma-client');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');

// Type Definitions
const typeDefs = importSchema('src/schema.graphql');
//const typeDefs = 'src/schema.graphql';

// Resolvers
const resolvers = {
  Query,
  Mutation,
};

// create graphQL server instance
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma },
});

server.start(() => console.log('server running on port 4000'));
