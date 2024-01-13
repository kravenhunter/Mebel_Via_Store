import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/test";
import { addProduct } from "../../store/basket/basketSlice";

import { ICard } from "../../types/ITypes";
import { Icony, Image } from "../index";

//import styles from "./catalog.module.scss";

interface IProps {
  card: ICard;
}
const initSelectedImage = (card: ICard) => {
  return card.imageDetails1 ?? "";
};
const CartDetails = ({ card }: IProps) => {
  const [selectedImage, setSelected] = useState(initSelectedImage(card));
  const dispatch = useAppDispatch();
  // инициализируем объект

  const addToBasketHandler = () => {
    console.log("click");

    dispatch(addProduct(card));
  };

  return (
    <div className="details grid gap-y-[22px]">
      <div className="category__path">
        <ul className="flex text-[16px] text-gray-400 items-center gap-x-3 ">
          <li>
            <Link to="/" replace className="text-gray-400 hover:text-gray-700">
              Главная
            </Link>
          </li>
          <li>
            <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
          </li>
          <li>
            <Link to="/catalog" replace className="text-gray-400 hover:text-gray-700">
              Каталог мебели
            </Link>
          </li>
          <li>
            <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
          </li>
          <li>Корпусная мебель</li>
        </ul>
      </div>
      <div className="details__card grid gap-y-[68px]">
        <div className="details__card_base flex justify-between">
          <div className="galaries flex gap-x-2">
            <ul className="image__list max-w-[164px] grid gap-y-2">
              <li onClick={() => setSelected(() => card.imageDetails1)}>
                <Image link={card.imageDetails1} name={card.title} />
              </li>
              <li onClick={() => setSelected(() => card.imageDetails2)}>
                <Image link={card.imageDetails2} name={card.title} />
              </li>
              <li onClick={() => setSelected(() => card.imageDetails3)}>
                <Image link={card.imageDetails3} name={card.title} />
              </li>
              <li onClick={() => setSelected(() => card.imageDetails4)}>
                <Image link={card.imageDetails4} name={card.title} />
              </li>
            </ul>
            <div className="selected__iamge max-w-[769px]  max-h-[501px]">
              <Image link={selectedImage} name={card.title} />
            </div>
          </div>
          <div className="properties flex flex-col gap-y-[16px] w-full max-w-[661px] ">
            <div className="flex gap-x-[90px]">
              <div className="title grid gap-y-[19px]">
                <h2>{card.title}</h2>
                <p className="code text-[16px] text-gray-500">Артикул: {card.article}</p>
              </div>
              <div className="grades grid gap-y-[12px]">
                <ul className="stars flex gap-x-1">
                  <li>
                    <Icony name="octicon:star-fill-16" width="24" height="24" color="#F57B0A" />
                  </li>
                  <li>
                    <Icony name="octicon:star-fill-16" width="24" height="24" color="#F57B0A" />
                  </li>
                  <li>
                    <Icony name="octicon:star-fill-16" width="24" height="24" color="#F57B0A" />
                  </li>
                  <li>
                    <Icony name="fluent:star-half-24-regular" width="24" height="24" color="#F57B0A" />
                  </li>
                  <li>
                    <Icony name="icomoon-free:star-empty" width="24" height="24" color="#F57B0A" />
                  </li>
                </ul>

                <p className="code text-[16px] text-gray-500">на основе 3 оценок</p>
                <p className="text-center code text-[16px] border-dotted border-b-[2px] border-black">Где посмотреть?</p>
              </div>
            </div>

            <div className="description text-[18px] flex flex-col gap-y-[16px]">
              <p className="text-[18px]">В комплект входят:</p>
              <ul className="pl-5">
                <li>- Кровать (164 х 83 х 203,5 см)</li>
                <li>- Кровать (164 х 83 х 203,5 см)</li>
              </ul>
              <p className="text-[18px]">
                Цвет фасада: <span className="color"></span> Анкор белый
              </p>
              <p className="text-[18px]">
                Цвет каркаса: <span className="color"></span> Венге светлый
              </p>
              <div className="price__details flex gap-x-[40px]">
                <div className="price flex gap-x-[10px] ">
                  <div className="cerrunt__price">
                    <h3 className="text-[#F57B0A]">10 991 ₽</h3>
                    <div className="in__store flex gap-x-[20px]">
                      <Icony name="carbon:checkmark-outline" width="24" height="24" color="#F57B0A" />
                      <p className="code text-[18px] text-gray-400">есть в наличии</p>
                    </div>
                  </div>
                  <div className="old__price relative flex items-start ">
                    <hr className="z-40 mt-[12px] w-full  absolute max-w-[63]  h-[2px]  bg-gray-400" />

                    <p className=" text-gray-400 text-[20px]">18 991 руб</p>
                  </div>
                </div>
                <div className="order">
                  <button onClick={() => addToBasketHandler()} className="w-[150px] h-[51px] hover:bg-orange-600 hover:text-whiterounded-xl bg-orange-500 text-3xl text-white grid place-content-center ">
                    <div className="flex gap-x-[10px]">
                      <Icony name="tdesign:cart" width="20" height="20" color="white" />
                      <p className="text-[20px] font-semibold">Добавить</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="waranrt  grid gap-y-5">
                <p className="text-[18px]">Гарантия 12 месяцев</p>
                <p className="text-[18px]">Страна производитель: Россия</p>
                <p className="text-[18px]">Ближайшая дата доставки: послезавтра, 5 января</p>
                <p className="text-[18px]">Стоимость доставки в пределах МКАД: 1190 ₽</p>
              </div>
            </div>
          </div>
        </div>

        <div className="details__card_all grid gap-y-[30px]">
          <div className="tabs flex gap-x-12">
            <p className="p-1 text-[#F57B0A] text-[16px] border-dotted border-b-[3px]  border-[#F57B0A]  font-semibold ">Характеристики</p>
            <p className="p-1 text-gray-600 text-[16px] border-dotted border-b-[3px]   border-gray-300">Отзывы покупателей (4)</p>
          </div>

          <div className="specification flex justify-between">
            <div className="specification__block w-full max-w-[670px] flex flex-col gap-y-[15px]">
              <ul className=" flex items-end justify-between">
                <li>
                  <p className="w-[162px] text-[18px] ">Материал фасада:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>
                <li>
                  <p className="w-[140px] text-[18px] ">ЛДСП, Зеркало</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[162px] text-[18px] ">Материал каркаса:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>
                <li>
                  <p className="w-[140px] text-[18px] ">ЛДСП, Зеркало</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[162px] text-[18px] ">Материал ручек:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">Пластик</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[180px] text-[18px] ">Основание кровати:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">настил</p>
                </li>
              </ul>
              <ul className=" flex items-end">
                <li>
                  <p className="w-[122px] text-[18px] ">Навес фасада:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">универсальный</p>
                </li>
              </ul>
            </div>
            <div className="specification__block w-full max-w-[770px] flex flex-col gap-y-[15px]">
              <ul className=" flex items-end justify-between">
                <li>
                  <p className="w-[200px] text-[18px] ">Типа направляющих:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>
                <li>
                  <p className="w-[140px] text-[18px] ">ЛДСП, Зеркало</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[300px] text-[18px] ">Наличие подъемного механизма::</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>
                <li>
                  <p className="w-[140px] text-[18px] ">ЛДСП, Зеркало</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[162px] text-[18px] ">Материал ручек:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">Пластик</p>
                </li>
              </ul>
              <ul className="flex items-end">
                <li>
                  <p className="w-[250px] text-[18px] ">Наличие ящика для белья:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">настил</p>
                </li>
              </ul>
              <ul className=" flex items-end">
                <li>
                  <p className="w-[350px] text-[18px] ">Наличие ортопедического основания:</p>
                </li>
                <li className="w-full  h-2 border-dashed border-b-[1px] border-black "></li>

                <li>
                  <p className="w-[140px] text-[18px] ">универсальный</p>
                </li>
              </ul>
              <p className="w-[167px] border-dotted border-b-[3px]  border-[#F57B0A]   p-1 text-[#F57B0A] font-semibold text-[16px] ">Остались вопросы?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
