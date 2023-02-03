import { ACCOUNT, ADMIN, HOME, OTHER, SOLUTIONS } from "./routes";

import { Account } from "../components/pages/account/Account";
import { Admin } from "../components/pages/admin/Admin";
import { ErrorPage } from "../components/pages/not-found/NotFound";
import { Home } from "../components/pages/home/Home";
import { RouteObject } from "react-router-dom";
import { Solutions } from "../components/pages/solutions/Solutions";

export type WithNavBar = {
  inNavBar?: boolean;
  navBarTitle?: string;
  path: string;
};

export type CustomRouteObject = RouteObject & WithNavBar;

export const routes: Array<CustomRouteObject> = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SOLUTIONS,
    element: <Solutions />,
    inNavBar: true,
    navBarTitle: "Solutions",
  },
  {
    path: ADMIN,
    element: <Admin />,
    inNavBar: true,
    navBarTitle: "Admin",
  },
  {
    path: ACCOUNT,
    element: <Account />,
    inNavBar: true,
    navBarTitle: "Account",
  },
  {
    path: OTHER,
    element: <ErrorPage />,
  },
];
