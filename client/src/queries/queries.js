import gql from "graphql-tag";

const GET_MASTERLISTS = gql`
  {
    getCategories {
      ID
      Name
      Children {
        Thumbnail
        ID
        Name
        ParentResourceCategoryID
        ...ChildrenRecursive
      }
    }
    GetResources {
      Thumbnail
      ID
      Name
      FileType
      CategoryName
      CategoryID
      ResourceID
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
      ChildResources {
        ...ResourcesChildrenRecursive
      }
    }
    getTemplates {
      Thumbnail
      Name
      AddedBy
      ID
      Active
      Resources
      DateAdded
      LastChanged
    }
    selectedCategoryId @client {
      categoryId
    }
  }

  fragment ChildrenRecursive on Children {
    Children {
      ...ChildFields
      Children {
        ...ChildFields
        Children {
          ...ChildFields
          Children {
            ...ChildFields
            Children {
              ...ChildFields
            }
          }
        }
      }
    }
  }

  fragment ChildFields on Children {
    Thumbnail
    ID
    Name
    ParentResourceCategoryID
    ResourceID
  }

  fragment ResourcesChildrenRecursive on ChildResources {
    ChildResources {
      ...ResourcesFields
      ChildResources {
        ...ResourcesFields
        ChildResources {
          ...ResourcesFields
          ChildResources {
            ...ResourcesFields
            ChildResources {
              ...ResourcesFields
            }
          }
        }
      }
    }
  }

  fragment ResourcesFields on ChildResources {
    Thumbnail
    ID
    SortOrder
  }
`;

const GET_TEMPLATES = gql`
  query {
    getTemplates {
      Name
      AddedBy
      ID
      Active
      Resources
      DateAdded
      LastChanged
    }
  }
`;

const GET_PRESENTATIONS = gql`
  query {
    getPresentations {
      Thumbnail
      UserName
      Name
      Message
      DateAdded
      LastChanged
      PresentationItems {
        ItemID
        Thumbnail
        Name
        Order
        PresentationKitID
      }
    }
    GetResources {
      Thumbnail
      ID
      Name
      FileType
      CategoryName
      CategoryID
      ResourceID
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
      ChildResources {
        ...ResourcesChildrenRecursive
      }
    }
  }
  fragment ResourcesChildrenRecursive on ChildResources {
    ChildResources {
      ...ResourcesFields
      ChildResources {
        ...ResourcesFields
        ChildResources {
          ...ResourcesFields
          ChildResources {
            ...ResourcesFields
            ChildResources {
              ...ResourcesFields
            }
          }
        }
      }
    }
  }

  fragment ResourcesFields on ChildResources {
    Thumbnail
    ID
    SortOrder
  }
`;

const GET_MAP_MARKERS = gql`
  query {
    getUserPresentationViews {
      ClientName
      ClientEmail
      Views {
        Latitude
        Longitude
        City
        State
      }
    }
  }
`;

const GET_RESOURCE_ANALYTICS = gql`
  query {
    getResourceStats {
      Thumbnail
      ResourceID
      ID
      TotalViews
      TotalTimeSpent
      TimesAddedToPreso
      TimesSharedAsResource
    }
  }
`;

const GET_ALL_USERS = gql`
  query {
    getUsersGroups {
      GroupName
      Users {
        Email
        FirstName
        LastName
        Status
        DateAdded
        LastActiveDate
      }
    }
  }
`;

const GET_ALL_GROUPS = gql`
  query {
    getUsersGroups {
      GroupName
      GroupDescription
      IsActive
    }
  }
`;

export {
  GET_MASTERLISTS,
  GET_TEMPLATES,
  GET_PRESENTATIONS,
  GET_MAP_MARKERS,
  GET_RESOURCE_ANALYTICS,
  GET_ALL_USERS,
  GET_ALL_GROUPS
};
