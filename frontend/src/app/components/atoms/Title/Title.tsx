import { FunctionComponent } from "react";
import Image from "next/image";

import moonshake from "../../../../res/images/moonshake.svg";

export interface TitleProps {}

export const Title: FunctionComponent<TitleProps> = () => {
  return <Image src={moonshake} alt="Moonshake" />;
};
