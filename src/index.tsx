import { render } from "react-dom";
import Counter from "./components/Counter/Counter";
import "./index.css";

render(
  <div className="wrapper">
    <Counter />
  </div>,
  document.getElementById("root")
);
