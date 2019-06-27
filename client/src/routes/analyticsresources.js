import React, {Fragment, useState} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_MASTERLISTS} from "../queries/queries";
import styled from "styled-components";
import ColumnChart from "../components/charts/ColumnChart";
import AnalyticsResourceTable from "../components/tables/AnalyticsResourceTable";
import LottieLoader from "../components/loading/lottieLoader";
import {TreeCardStyles as MiniCard} from "../components/cards";
import {MainPageTitle} from "../components/titles";
import TreeView from "../components/treelist/TreeView";

// Sets selected category id in cache, which we later extract to filter items in our resource array
const filterResources = (resources, selectedCategoryId) => {
  if (selectedCategoryId === 2246) {
    return resources;
  }

  return resources.filter(resource => {
    return resource.ResourceCategoryMembership.map(
      resource => resource.ResourceCategoryID
    ).includes(selectedCategoryId);
  });
};

// Call Resource Analytics API
// const fetchAnalytics = async (resources, setPending) => {
//   const JWT =
//     "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16TkRPVUU1T1RkRE1qZENNVVpGTWpnM05VUXpRelV5TmpFME0wUTRNVVpFUVRVMk9UTXhRZyJ9.eyJuYW1lIjoic3JpbmlAc3JpbmkuY29tIiwiZW1haWwiOiJzcmluaUBzcmluaS5jb20iLCJhcHBUeXBlIjoiMiIsImlzcyI6Imh0dHBzOi8vc2V0dmkuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfHNyaW5pQHNyaW5pLmNvbSIsImF1ZCI6ImJOSER0VVZLR0U4dU5RdUNuQk9QdjJyeHZaNDhOdUtQIiwiaWF0IjoxNTU5NzU5MDA5LCJleHAiOjE1OTA4NjMwMDl9.fz-xwGbGf0n1-_BXbEjQvLMTaTJC48yBhjQBrn6mXnTNqzqBYwFfLrdjzHewBClVFH9iRPffLmfZZO23ZpTbTljJ11sS8YtzI3pOEnTepIksleehnfTzbfAL_j1IM1rs6uiWnqg1xI-oqSLO_D7pnwp24Puds44It2LSj4-WH5c1XaAMfKU147qqkvX8LQ98CXTYsdzNt6CcX1x1LvRJpPIZ9Z2oGusLu3E_sv1SmGL5dAKSVjWAAiGjViTft-ngo9hG5SZj0nQXeM5S2ygCQUU5nBK0YbkJnXfeAxpvbr3W5CRGqE9xzf32hADUDC7XizKZosij63cTjtQG5MwZ0w";
//   const resourceIDs = await resources.map(resource => resource.ResourceID);
//   console.log(resourceIDs);
//   const resIdArray = resourceIDs.map(async resId => {
//     const response = await fetch(
//       `https://dev51.setvi.com/webapi/getresourceanalytics?startdate=01/01/2015&enddate=06/06/2017&resourceid=${resId}`,
//       {
//         method: "post",
//         headers: {Authorization: "Bearer " + JWT}
//       }
//     );
//     const data = await response.json();
//   });
//   const data = await Promise.all(resIdArray);
//   setPending(false);
//   return data;
// };

export default function AnalyticsResourceView() {
  const [pending, setPending] = useState(true);
  const {data, loading, error} = useQuery(GET_MASTERLISTS, {});

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const categories = data.getCategories;
  const selectedCategoryId = data.selectedCategoryId.categoryId;

  const resources = filterResources(
    data.GetResources,
    selectedCategoryId === 2246 ? 2247 : selectedCategoryId
  );
  const resourcesanalytics = fetchAnalytics(resources, setPending);

  if (pending) {
    return <LottieLoader />;
  }
  return (
    <Fragment>
      <MainPageTitle>Resource Analytics</MainPageTitle>
      <ColumnChart style={{maxHeight: "500px", maxWidth: "100%"}} />
      <ResourceActivity>
        <MiniCard style={{marginTop: "2em"}}>
          <TreeView data={categories} />
        </MiniCard>

        <AnalyticsResourceTable resources={resourcesanalytics} />
      </ResourceActivity>
    </Fragment>
  );
}

const ResourceActivity = styled.div`
  display: flex;
  flex-direction: row;
`;
