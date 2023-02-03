import "./Menu.css";

import { Icon } from "@fluentui/react";
import { NavBarProps } from "./HamburguerNavBar";
import { NavLink } from "react-router-dom";

const activeStyle = {
  borderBottom: "4px solid #fa6400",
  borderLeft: 0,
  borderRight: 0,
};

interface MenuProps extends NavBarProps {
  direction: "horizontal" | "vertical";
}

export const Menu: React.FC<MenuProps> = ({ items, direction }) => {
  return (
    <ul className={`nav-links ${direction}`}>
      {items.map((item, index) => {
        return (
          <li
            className={`nav-item nav-item-${direction}`}
            key={`${item.navBarTitle}.${index}`}
          >
            <NavLink
              to={item.path}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {item.navBarTitle}
              <div className="menu-icon">
                <Icon iconName="ChevronDown" className="orange" />
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
