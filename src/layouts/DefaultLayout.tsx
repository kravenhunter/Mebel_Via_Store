import React from "react";
import RouterNav from "../routes/RouterNav";
import styles from "./dafault.module.scss";
// import Header from "../components/ui-components/Header";
// import Footer from "../components/ui-components/Footer";
import { Footer, Header } from "../components";

export interface IProps {
  children: React.ReactNode;
}
//Пример для 1го вариант роутинга
// const DefaultLayout = ({ children }: IProps) => {
//   return <div className={styles.base}>{children}</div>;
// };

//Пример для 2го вариант роутинга

// const initState = () => {
//   return catalog.slice(0, 3);
// };
const DefaultLayout = () => {
  return (
    <>
      <div className={`${styles.base} bg-black `}>
        <Header />
        <RouterNav />
        <Footer />
      </div>
    </>
  );
};
export default DefaultLayout;
