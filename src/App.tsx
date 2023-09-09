import { RouterProvider } from "react-router-dom";
import { desktopRouter } from "./router/desktopRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={desktopRouter} />
    </div>
  );
};

export default App;
