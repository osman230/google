const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    BookId: string
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type bookToSave {
    BookId: string
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookToSave): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
