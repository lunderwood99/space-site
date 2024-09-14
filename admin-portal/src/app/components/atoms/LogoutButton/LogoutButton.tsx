import { FunctionComponent } from "react";

export interface LogoutButtonProps {}

export const LogoutButton: FunctionComponent<LogoutButtonProps> = () => {
  return (
    <a
      href="/api/auth/logout?returnTo=http://localhost:3001/login"
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-fit"
    >
      Logout
    </a>
  );
};
