import "./Footer.css";

import { useNavigateTo } from "../nav-bar/useNavigateTo";

export const Footer = () => {
  const { toHome } = useNavigateTo();

  return (
    <footer>
      <div className="footer-logo div-link" onClick={toHome}></div>
    </footer>
  );
};
