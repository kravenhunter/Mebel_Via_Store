import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/test";
import { removeProduct } from "../../store/basket/basketSlice";
import { ICard } from "../../types/ITypes";
import { Icony, Image } from "../index";

const countPrice = (products: ICard[]) => {
  const price = products.reduce((previousValue, currentValue) => {
    previousValue += currentValue.price;
    return previousValue;
  }, 0);
  return price;
  // const price = products.reduce((previousValue, currentValue, index) => {
  //   const currentDiscountromPrice = Math.floor(currentValue.price * (currentValue.discount / 100));
  //   previousValue += currentValue.price - currentDiscountromPrice
  //   return previousValue;
  // }, 0);
};

const countDicont = (products: ICard[], allPrice: number) => {
  //Get sum of the whole percents
  const sumPercents = products.reduce((previousValue, currentValue) => {
    previousValue += currentValue.discount;
    return previousValue;
  }, 0);
  //count dicount
  const disount = allPrice * (sumPercents / 100);
  return Math.floor(disount);
};

const Store = () => {
  const basket = useAppSelector((state) => state.basket.products);

  const dispatch = useAppDispatch();
  // const [basket, setBasket] = useState<ICard[]>(() => cards);

  const [allPrice, setAllPrice] = useState<number>(() => countPrice(basket));
  // const [allPrice, setAllPrice] = useState<number>(() => {
  //   const price = basket.reduce((previousValue, currentValue, index) => {
  //     previousValue += currentValue.price * (currentValue.discount / 100);
  //     return previousValue;
  //   }, 0);
  //   return price;
  // });
  const [discountPrice, setDicont] = useState<number>(() => countDicont(basket, allPrice));
  const removeHandler = (idProduct: number) => {
    console.log("Click");

    // setBasket((prev) => {
    //   const newArr = prev.filter((el) => el.id !== id);
    //   return newArr;
    // });
    dispatch(removeProduct({ id: idProduct }));
  };
  useEffect(() => {
    //Get new  summ priece for product in the backet
    const price = countPrice(basket);
    setAllPrice(price);
    // Get new  sum dicount

    const sumDicontPrice = countDicont(basket, price);
    // set new dicont value
    setDicont(Math.floor(sumDicontPrice));
  }, [basket]);
  return (
    <div className="order__container m-auto w-full max-w-[1231px] pb-[91px]">
      <h3>Ваша корзина ({basket.length})</h3>
      <div className="user__backet grid gap-y-[30px]  justify-center">
        {basket?.map((el) => (
          <div key={el.id} className="order__card max-w-[468px] w-full relative flex gap-x-[15px] justify-between">
            <div className="image max-w-[163px]">
              <Image link={el.imagePreview} name="title" />
            </div>
            <div className="details max-w-[243px] w-full">
              <ul className="text-[14px] grid gap-y-[10px]">
                <li>{el.title}</li>
                <li>{el.complect}</li>
                <li className="text-[#F57B0A] font-semibold">{el.price} ₽</li>
              </ul>
            </div>
            <div className="close w-[20px] h-[20px] cursor-pointer" onClick={() => removeHandler(el.id)}>
              <Icony name="material-symbols:close" width="20" height="20" color="#64748b" />
            </div>
          </div>
        ))}
      </div>
      <div className="count grid  gap-y-[10px]">
        <ul className="flex justify-between ">
          <li>
            <h3>Общая сумма заказа</h3>
          </li>
          <li>
            <h3 className="text-[#F57B0A] font-semibold">{allPrice - discountPrice + 3000} ₽</h3>
          </li>
        </ul>
        <ul className="flex justify-between text-[16px] ">
          <li> Товар на сумму</li>
          <li className="text-[#F57B0A] font-semibold"> {allPrice - discountPrice} ₽</li>
        </ul>
        <ul className="flex justify-between text-[16px] ">
          <li> Доставка</li>
          <li className="text-[#F57B0A]  font-semibold"> 3 000 ₽</li>
        </ul>
        <ul className="flex justify-between text-[16px] ">
          <li> Скидка</li>
          <li className="text-[#F57B0A]  font-semibold"> -{discountPrice} ₽</li>
        </ul>
      </div>
      {/* <div className="send__form m-auto max-w-[596px] w-full grid gap-y-[30px]">
        <h3>Заполните форму для оформления заказа</h3>

        <form className=" grid gap-y-[30px]">
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="ВАШЕ ИМЯ" />
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="ФАМИЛИЯ" />
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="ОТЧЕСТВО" />
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="ТЕЛЕФОН" />
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="EMAIL" />
          <input className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" type="text" placeholder="Страна, индекс, город, улица, квартира " />

          <textarea className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600" name="question" id="" cols={30} rows={10} placeholder="ВАШ ВОПРОС"></textarea>
          <button className="w-[287px] h-[58px] hover:bg-orange-600 hover:text-whiterounded-xl bg-orange-500 text-3xl text-white grid place-content-center ">
            <p className="text-[23px] font-semibold">Оформить заказ</p>
          </button>
          <small className="max-w-[352px] text-[14px] text-gray-400">Нажимая на кнопку вы подтверждаете, что даете согласие на обработку персональных данных</small>
        </form>
      </div> */}
    </div>
  );
};

export default Store;
