import gql from "graphql-tag";

const presentations = gql`
  extend type Query {
    getPresentations: [Presentation]
  }
  type Presentation {
    Thumbnail: String
    Name: String!
    ID: Int!
    UserName: String!
    Message: String!
    DateAdded: String!
    LastChanged: String
    Active: Boolean!
    PresentationItems: [PresentationItem]
  }
  type PresentationItem {
    Thumbnail: String
    ID: Int!
    ItemID: String!
    Name: String
    Type: Int
    Order: Int!
    PresentationKitID: Int!
    Editable: Boolean!
    IsValid: Boolean!
  }
`;

export default presentations;
