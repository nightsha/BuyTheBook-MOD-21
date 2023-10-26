const { Class } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    }
  },
  // Adding mutation function with chatgpt help
  Mutation: {
    createClass: async (_, { input }) => {
      try {
        const  newClass = new Class(input);
        await newClass.save();
        return newClass;
      } catch (error) {
        // Handle any errors here, such as validation errors
         throw new Error("Failed to create a new class");
      }   
     
     }
    

  }
};

module.exports = resolvers;



// additional steps to take
Schema Definition:

In your GraphQL schema, you should define the "createClass" mutation to match the resolver you've just created. This should be done where you define your schema, typically in a separate schema file.

graphql
Copy code
type Mutation {
  createClass(input: ClassInput!): Class
}
Make sure you have a corresponding "ClassInput" type defined in your schema for the input object.

Import and Use Your Resolvers:

Finally, you need to import and use these resolvers in your GraphQL server setup. How you do this depends on the technology stack you're using, but 
typically it involves importing your resolvers and combining them with your schema definition.

With these steps, 
you can define query and mutation functionality to work with your Mongoose models in your GraphQL server. 
Adjust the mutation resolvers and schema definitions 
as needed for your specific use case and model operations.