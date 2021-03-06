// Code beloow comes from the following website: https://manage.auth0.com/dashboard/us/dev-b4vo7iqt/applications/5zLG10jsVg1M4GJjw1qXIyDD2bD3azKQ/quickstart"

import React, { Fragment } from "react";
import Button from "../button/Button";
import { useAuth0 } from "../../react-auth0-spa";
import "./Profile.css";

const Profile = () => {
  const { loading, user, logout, isAuthenticated } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="profile-container">
        <img src={user.picture} alt="Profile" className="profile-pic" />
      </div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {isAuthenticated && (
        <Button name="Log out" handleChange={() => logout()} />
      )}
    </div>
  );
};

export default Profile;
