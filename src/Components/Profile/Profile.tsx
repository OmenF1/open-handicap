import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Auth/LogoutButton";
import LoginButton from "../Auth/LoginButton";
import DetailsForm from "./DetailsForm";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>

        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {user !== undefined && isAuthenticated && (
          <DetailsForm />
        )}
    </>
  );
};

export default Profile;
