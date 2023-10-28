const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Class {
    _id: ID
    name: String
      building: String
    creditHours: Int
  }
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    classes: [Class]
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type input BookInput {
    author: [String]!
    description: String!
    title: String!
    bookID: ID!
    image: String
    link: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookInput: BookInput!): User
    removeBook(bookID: ID!): User

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

 

module.exports = typeDefs;
