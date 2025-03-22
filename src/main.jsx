import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./i18n.js";
import MainLoader from "./MainLoader/MainLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<MainLoader />}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>
);
