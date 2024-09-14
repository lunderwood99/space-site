"use client";

import { FunctionComponent } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import { LogoutButton } from "../../atoms/LogoutButton/LogoutButton";
import { UserInfo } from "../../atoms/UserInfo/UserInfo";

export const LoggedInHeader: FunctionComponent = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-row p-4 items-center justify-end space-x-4">
      {user ? (
        <>
          <UserInfo user={user} />
          <LogoutButton />
        </>
      ) : null}
    </div>
  );
};
