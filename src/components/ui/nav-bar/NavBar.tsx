import "./NavBar.css";

import { HamburguerNavBar } from "./HamburguerNavBar";
import { Menu } from "./Menu";
import { WithNavBar } from "../../../routes/Config";
import { useNavigateTo } from "./useNavigateTo";

export interface NavBarProps {
  items: Array<WithNavBar>;
}

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const { toHome } = useNavigateTo();

  return (
    <>
      <HamburguerNavBar items={items} />

      <nav className="navbar" id="main-menu">
        <div className="nav-logo div-link" onClick={toHome} />
        <Menu items={items} direction="horizontal" />
      </nav>
    </>
  );
};
