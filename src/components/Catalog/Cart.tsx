import { Button, Image } from "../index";
import styles from "./catalog.module.scss";

interface IProps {
  id: number;
  discount: number;
  imagePreview: string;
  title: string;
  price: number;
}
const Cart = ({ id, discount, imagePreview, title, price }: IProps) => {
  return (
    <div className={`${styles.cart} flex flex-col p-9  justify-between `}>
      <div className={`${styles.cart__discount} text-center pt-7 rounded-bl-full `}>
        <p className="text-[16px]">-{discount}%</p>
      </div>
      <Image link={imagePreview} name="title" />
      <div className={`${styles.cart__title}`}>
        <h4 className="mb-12 mt-6">{title}</h4>
      </div>

      <div className={`prices grid justify-start mb-8`}>
        <div className={`${styles.cart__price_old} px-1 flex  `}>
          <small className="text-gray-600">{price} руб</small>
          <hr className="self-center" />
        </div>

        <strong className="text-[#F57B0A]">{price} руб</strong>
      </div>

      <div className=" flex justify-between">
        <Button isButton={false} path={`/catalog/${id}`} title="Заказать" buttonCLass="rounded-xl bg-orange-500 text-3xl text-white grid place-content-center px-12 py-4" />

        <div className={`${styles.cart__delivery} flex gap-3 justify-between items-center`}>
          <Image link={`/images/catalog/Free_delivery.svg`} name="title" />
          <p>1 день</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
