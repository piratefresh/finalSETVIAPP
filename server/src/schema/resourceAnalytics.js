import gql from "graphql-tag";

const resourceAnalytics = gql`
  extend type Query {
    getResourceStats(ResourceID: Int!): [ResourceStat]
  }
  type ResourceStat {
    Thumbnail: String!
    ID: Int!
    ResourceID: String!
    ResourceName: String!
    ResourceType: String!
    TotalViews: Int!
    TotalTimeViewing: Int!
    TimesAddedToPreso: Int!
    TotalTimePlaying: Int!
    TimesSharedAsResource: Int!
    TimesSharedInPresentation: Int!
    TimesOpenedAsResource: Int!
    TimesOpenedInPresentation: Int!
    TotalTimeSpent: Int!
  }
`;

export default resourceAnalytics;
