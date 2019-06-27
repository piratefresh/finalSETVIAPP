import React, {Fragment} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_ALL_GROUPS} from "../queries/queries";
import UsersTable from "../components/tables/UsersTable";
import LottieLoader from "../components/loading/lottieLoader";
// Styles
import {MainPageTitle} from "../components/titles";

export default function Presentations() {
  const {data, loading} = useQuery(GET_ALL_GROUPS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  // Assign our fetched data
  const groups = data.getUsersGroups;
  return (
    <Fragment>
      <MainPageTitle>All Groups</MainPageTitle>
      <UsersTable resources={groups} />
    </Fragment>
  );
}
