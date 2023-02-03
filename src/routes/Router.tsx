import { CustomRouteObject, WithNavBar } from "./Config";

import { Layout } from "../components/pages/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const getNavBarItems = (
  routes: Array<CustomRouteObject>
): Array<WithNavBar> => {
  return routes
    .filter((route) => {
      return route.inNavBar;
    })
    .map((route) => {
      const { path, navBarTitle, inNavBar } = route;
      return { path, navBarTitle, inNavBar };
    });
};

export const getRouter = (routes: Array<CustomRouteObject>) => {
  const navBarItems = getNavBarItems(routes);

  const routesWithLayout = routes.map((route) => {
    return {
      ...route,
      element: <Layout navBarItems={navBarItems}>{route.element}</Layout>,
    };
  });

  const router = createBrowserRouter(routesWithLayout);

  return router;
};
