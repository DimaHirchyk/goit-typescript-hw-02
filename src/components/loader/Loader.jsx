import { BarLoader } from "react-spinners";
import css from "./loader.module.css";

export default function Loader({ loading }) {
  return (
    <>
      <BarLoader
        className={css.loader}
        loading={loading}
        height="7px"
        width="300px"
        speedMultiplier="0.5"
      />
    </>
  );
}
