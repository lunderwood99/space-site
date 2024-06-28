import React, { FunctionComponent } from "react";

export interface OperativeButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "className"> {
  operation: "add" | "delete";
}

export const OperativeButton: FunctionComponent<OperativeButtonProps> = ({
  operation,
  ...props
}) => {
  const className =
    operation === "add"
      ? "text-green-400 transition ease-in-out duration-500 hover:text-green-500 hover:-translate-y-1 hover:scale-110"
      : "text-red-400 transition ease-in-out duration-500 hover:text-red-500 hover:-translate-y-1 hover:scale-110";

  return <button className={className} {...props} />;
};
