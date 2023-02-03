import { Footer } from "../../ui/footer/Footer";
import { NavBar } from "../../ui/nav-bar/NavBar";
import { WithChildren } from "../../../types/WithChildren";
import { WithNavBar } from "../../../routes/Config";

interface LayoutProps extends WithChildren {
  navBarItems: Array<WithNavBar>;
}

export const Layout: React.FC<LayoutProps> = ({ children, navBarItems }) => {
  return (
    <>
      <NavBar items={navBarItems} />
      <div>{children}</div>
      <Footer />
    </>
  );
};
