import gql from "graphql-tag";
import {GraphQLDate, GraphQLDateTime, GraphQLTime} from "graphql-iso-date";

const categories = gql`
  extend type Query {
    getTemplates: [Template]
  }
  type Template {
    Thumbnail: String!
    Name: String!
    ID: Int!
    AddedBy: String!
    DateAdded: String!
    LastChanged: String
    Active: Boolean!
    Comment: String!
    Deleted: Boolean!
    Resources: [String!]
  }
`;

export default categories;
