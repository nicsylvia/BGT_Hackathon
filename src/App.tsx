import { Suspense } from "react";
import { MajorRoute } from "./router/MajorRoute";
import LoadingPage from "./pages/Desktop/LoadingPage/LoadingPage";

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <MajorRoute />
      </Suspense>
    </div>
  );
};

export default App;
