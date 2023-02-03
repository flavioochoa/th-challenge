/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import "./Link.css";

import { Link as ReactRouterLink } from "react-router-dom";
import { WithText } from "../../../types/WithText";

interface LinkProps extends WithText {
  href: string;
  icon?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ text, href, icon }) => {
  return (
    <div className="link-container">
      <ReactRouterLink to={href}>{text}</ReactRouterLink>
      {icon && <div className="icon-container"> {icon}</div>}
    </div>
  );
};
