import { memo } from "react";
import { ICard } from "../../types/ITypes";
import { Cart } from "../index";
import styles from "./catalog.module.scss";
interface IProps {
  title: string;
  carts: ICard[];
}
export const CatalogList = memo(({ title, carts }: IProps) => {
  return (
    <>
      <div className={`${styles.catalog__wrapper} flex flex-col gap-y-10 `}>
        <h2 className="mt-8">{title}</h2>
        <div className={`flex flex-wrap justify-between gap-y-32  `}>
          {carts.map((el, index) => (
            <div key={index} className={`${styles.catalog__wrapper_item}`}>
              <Cart {...el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
