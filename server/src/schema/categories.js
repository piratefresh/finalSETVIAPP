const gql = require("graphql-tag");

const categories = gql`
  type Query {
    getCategories: Category
    getResourcesFromCategory(id: Int!): [Resource!]!
    GetResources: [Resource]!
  }
  type Category {
    ID: Int!
    Name: String!
    ParentResourceCategoryID: Int!
    CompanyID: Int!
    hasChildren: Boolean!
    Children: [Children]!
    Thumbnail: String!
  }
  type Children {
    ID: Int!
    Name: String!
    ResourceID: String
    ParentResourceCategoryID: Int!
    CompanyID: Int!
    Company: Company
    Children: [Children]
    Thumbnail: String!
  }
  type Company {
    ID: Int!
    Name: String!
    LastDataChangedDate: String!
  }
  type Resource {
    ID: Int!
    ResourceID: String!
    Name: String!
    CategoryID: Int!
    CategoryName: String!
    ResourceTypeName: String!
    Thumbnail: String!
    FileType: String
    ChildResources: [ChildResources]
    ResourceCategoryMembership: [ResourceCategoryMembership]!
    DateAdded: String!
  }
  type ChildResources {
    ID: Int!
    ResourceID: Int!
    SortOrder: Int!
    Editable: Boolean!
    PptSlideProperties: String
    Thumbnail: String
    FileType: String!
    ChildResources: [ChildResources]
  }
  type ResourceCategoryMembership {
    ResourceID: Int!
    ResourceCategoryID: Int!
    ResourceOrder: Int
  }
`;

export default categories;
