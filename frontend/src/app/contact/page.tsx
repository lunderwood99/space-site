import { FunctionComponent } from "react";

export interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="mt-8 pt-4 mb-auto w-full border-t-2 border-white">
      <p className="mt-8">
        For booking and other inquiries, please contact us at
        <h2 className="">test@email.com</h2>
      </p>
    </div>
  );
};

export default Contact;
