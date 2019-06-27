import React, {Fragment} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_ALL_USERS} from "../queries/queries";
import UsersTable from "../components/tables/UsersTable";
import LottieLoader from "../components/loading/lottieLoader";
// Styles
import {MainPageTitle} from "../components/titles";

export default function Presentations() {
  const {data, loading} = useQuery(GET_ALL_USERS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  // Assign our fetched data
  const users = data.getUsersGroups;
  const AllUsers = users[0].Users;
  return (
    <Fragment>
      <MainPageTitle>All Users</MainPageTitle>
      <UsersTable resources={AllUsers} />
    </Fragment>
  );
}
