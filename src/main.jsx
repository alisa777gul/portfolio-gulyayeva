import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./i18n.js";
import MainLoader from "./components/MainLoader/MainLoader.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<MainLoader />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>
);
