const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Import your typeDefs and resolvers
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create an Express app
const app = express();

// Apply the Apollo Server middleware to the Express app
server.applyMiddleware({ app });

// Start the server
app.listen({ port: 3000 }, () => {
  console.log(`Server running at http://localhost:3000${server.graphqlPath}`);
});