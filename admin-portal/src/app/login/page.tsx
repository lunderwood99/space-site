import { LoginButton } from "@/app/components/atoms/LoginButton/LoginButton";
import { FunctionComponent } from "react";

const LoginPage: FunctionComponent = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="ml-auto mr-auto lw-8">
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
