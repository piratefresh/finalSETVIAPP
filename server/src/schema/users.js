import gql from "graphql-tag";

const users = gql`
  extend type Query {
    getUsersGroups: [Group]
  }
  type Group {
    Users: [User]
    Id: Int
    GroupName: String!
    GroupDescription: String
    IsActive: Boolean!
    IsDeleted: Boolean!
    IsDefault: Boolean!
  }
  type User {
    ID: Int!
    FirstName: String!
    LastName: String!
    Email: String!
    DateAdded: String!
    LastActiveDate: String
    Status: String!
  }
`;

export default users;
