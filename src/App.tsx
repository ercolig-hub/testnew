import "./style.css";
import IMAGE from "./download.jpg";
import { Counter } from "./Counter";

export const App = () => {
  const num = 0;
  return (
    <>
      <img src={IMAGE} alt="test img" width="300" height="300" />
      <h1>
        CARI GIUSEPPE {process.env.NODE_ENV} - {process.env.name}
        <Counter />
      </h1>
    </>
  );
};
