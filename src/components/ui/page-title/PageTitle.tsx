import "./PageTitle.css";

import { WithChildren } from "../../../types/WithChildren";

export const PageTitle: React.FC<WithChildren> = ({ children }) => {
  return (
    <div className="title-container">
      <div className="margin-10">{children}</div>
    </div>
  );
};
