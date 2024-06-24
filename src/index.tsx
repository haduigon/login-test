import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
      <Root />
  </Provider>
);
