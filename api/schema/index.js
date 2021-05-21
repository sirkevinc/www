const { gql } = require('apollo-server');

const typeDefs = gql`
    type Post {
        id: ID!
        image: String!
        title: String!
        content: String!
        author: User!
    }
    type User {
        id: ID!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
    }

    type UpdateResponse {
        success: Boolean!
        message: String
    }

    type Query {
        user(id: ID!): User
        users: [User!]!
        post(id: ID!): Post
        posts: [Post!]!
    }

    type Mutation {
        createUser(email: String!, password: String!, firstName: String!, lastName: String!): User!
        createPost(image: String!, title: String!, content: String!, userID: ID!): Post!
        removePost(id: ID!): UpdateResponse!
        login(email: String, password: String): User
    }
`

module.exports = typeDefs;