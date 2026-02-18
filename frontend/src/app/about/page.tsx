import { FunctionComponent } from "react";
import Image from "next/image";

import img37 from "../../res/images/37-SJG04281.jpg";
import img63 from "../../res/images/63-SJG04755.jpg";
import img92 from "../../res/images/92-SJG05535.jpg";
import img73 from "../../res/images/73-SJG05090.jpg";

export interface ContactProps {}

const Contact: FunctionComponent<ContactProps> = () => {
  return (
    <div className="mt-4 w-full border-t-2 border-white">
      <p className="mt-8 mb-8">
        For booking and other inquiries, please contact us at{" "}
        <a className="font-bold" href="mailto:moonshake.band23@gmail.com">
          moonshake.band23@gmail.com
        </a>
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image src={img37} alt="" className="w-1/2 h-1/2 object-cover" />
        <Image src={img63} alt="" className="w-1/2 h-1/2 object-cover" />
        <Image src={img92} alt="" className="w-1/2 h-1/2 object-cover" />
        <Image src={img73} alt="" className="w-1/2 h-1/2 object-cover" />
      </div>
      <p className="mt-8 font-xs">
        All photos courtesy of our wonderful friend{" "}
        <a
          className="font-bold text-sky-500"
          href="https://www.shaygodfrey.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shaina Godfrey
        </a>
      </p>
    </div>
  );
};

export default Contact;
