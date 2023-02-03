import { FontIcon, mergeStyles } from "@fluentui/react";

import { Menu } from "./Menu";
import { WithNavBar } from "../../../routes/Config";
import { useNavigateTo } from "./useNavigateTo";
import { useState } from "react";

export interface NavBarProps {
  items: Array<WithNavBar>;
}

const iconClass = mergeStyles({
  fontSize: 30,
  height: 30,
  width: 30,
  color: "#fa6400",
});

export const HamburguerNavBar: React.FC<NavBarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const { toHome } = useNavigateTo();

  return (
    <>
      <nav className="navbar" id="hamburger-menu">
        <div className="nav-logo div-link" onClick={toHome} />
        <div className="hamburger-container-icon ">
          {!isOpen ? (
            <FontIcon
              aria-label="CollapseMenu"
              iconName="CollapseMenu"
              className={iconClass}
              onClick={open}
            />
          ) : (
            <FontIcon
              aria-label="ChromeClose"
              iconName="ChromeClose"
              className={iconClass}
              onClick={close}
            />
          )}
        </div>
      </nav>
      <div id="hamburger-menu-items">
        {isOpen && <Menu items={items} direction="vertical" />}
      </div>
    </>
  );
};
