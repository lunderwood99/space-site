import { FunctionComponent } from "react";

export interface ModalProps extends React.HtmlHTMLAttributes<HTMLElement> {
  visible: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({ visible, ...rest }) => {
  return visible ? (
    <div className="fixed h-full w-full backdrop-blur-sm flex flex-col items-center top-0">
      <div
        className="fixed top-1/4 flex flex-col items-center h-fit w-2/4 border rounded-lg border-solid p-6 bg-black gap-4"
        {...rest}
      />
    </div>
  ) : null;
};
