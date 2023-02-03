import "./App.css";

import { RouterProvider } from "react-router-dom";
import { getRouter } from "./routes/Router";
import { routes } from "./routes/Config";

const router = getRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
