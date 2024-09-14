"use client";

import { FunctionComponent } from "react";
import { UserProfile } from "@auth0/nextjs-auth0/client";

export interface UserInfoProps {
  user: UserProfile;
}

export const UserInfo: FunctionComponent<UserInfoProps> = ({ user }) => {
  return (
    <>
      <h2>Logged in as {user?.name}</h2>
    </>
  );
};
