import React, {Fragment} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_PRESENTATIONS} from "../queries/queries";
import PresentationsTable from "../components/tables/PresentationsTable";
import LottieLoader from "../components/loading/lottieLoader";
// Styles
import {MainPageTitle} from "../components/titles";

export default function Presentations() {
  const {data, loading} = useQuery(GET_PRESENTATIONS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const presentations = data.getPresentations;
  const resources = data.GetResources;

  // Gets the thumbnails for presentations
  let result = resources.filter(resource => {
    return presentations.some(presentation =>
      presentation.PresentationItems.map(
        itemID => resource.ResourceID === itemID
      )
    );
  });

  result.map(result =>
    presentations.map(presentation => {
      presentation.PresentationItems.map(item => {
        if (item.ItemID === result.ResourceID) {
          return (presentation.Thumbnail = result.Thumbnail);
        }
      });
    })
  );

  return (
    <Fragment>
      <MainPageTitle>Presentations</MainPageTitle>
      <PresentationsTable resources={presentations} />
    </Fragment>
  );
}
