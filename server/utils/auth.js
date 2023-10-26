// refactored and updated code to use graphQl API
// used chatGPT help
const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authentication/made changes here
  authMiddleware: function (context) {
    const { req } = context;

    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      // made changes
      throw new Error ( 'You have no token!' );
    }

    // verify token and get user data out of it
    // changes made here
    try {
      const { data } = jwt.verify(token, secret, { expiresIn: expiration });
      context.user = data;
    } catch (error) {
      throw new Error('Invalid token');
      
    }

    // return context instead of next
    return context;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};





// additional code to work with not sure where to file this block
const { authMiddleware } = require('./auth'); // Import your authentication middleware

const resolvers = {
  Query: {
    // Apply authMiddleware before resolving this query
    protectedQuery: (parent, args, context) => {
      // The user is available in context after authentication
      const user = context.user;
      if (!user) {
        throw new Error('Authentication required');
      }

      // Your resolver logic here
    },
  },
};
