import "./Card.css";

import { Depths, FontIcon, mergeStyles } from "@fluentui/react";

import { Link } from "../link/Link";
import { WithId } from "../../../types/WithId";

export interface CardProps extends WithId {
  preHeader: string;
  header: string;
  description: string;
  link: string;
}

const iconClass = mergeStyles({
  fontSize: 40,
  height: 40,
  width: 40,
  color: "#fa6400",
});

export const Card = ({ preHeader, header, description, link }: CardProps) => {
  return (
    <div className="card-container" style={{ boxShadow: Depths.depth4 }}>
      <div className="card-pre-header">
        <p>{preHeader}</p>
      </div>
      <div className="card-header">
        <h3>{header}</h3>
      </div>
      <div className="card-description">{description}</div>
      <div className="card-link">
        <Link
          href={link}
          text="See details"
          icon={
            <FontIcon
              aria-label="IncreaseIndentArrow"
              iconName="IncreaseIndentArrow"
              className={iconClass}
            />
          }
        />
      </div>
    </div>
  );
};
