import gql from "graphql-tag";

const user = gql`
  extend type Query {
    getUserPresentationViews: [UserView]
  }
  type UserView {
    ClientName: String!
    ClientEmail: String!
    Views: [View]
  }
  type View {
    Latitude: String!
    Longitude: String!
    City: String
    State: String
  }
`;

export default user;
