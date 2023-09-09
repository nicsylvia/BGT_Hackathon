import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Store } from "./services/state-management/Store";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

const queryClient = new QueryClient();

let persitstore = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate persistor={persitstore}>
          <App />
          <ReactQueryDevtools />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
