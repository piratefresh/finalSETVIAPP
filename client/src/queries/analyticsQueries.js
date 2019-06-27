import gql from "graphql-tag";

const GET_RESOURCE_ANALYTICS = gql`
  query($pageNum: Int!) {
    getResourceStats(pageNum: $pageNum) {
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

export {GET_RESOURCE_ANALYTICS};
