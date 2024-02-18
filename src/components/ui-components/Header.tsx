import { NavLink } from "react-router-dom";
import { UserBasket } from "../../components";
import { useAppSelector } from "../../hooks";
import { useShowCart } from "../../hooks/useShowCart";
import { Icony, Image } from "../index";
import styles from "./ui.module.scss";

// import catalog from "../../store/catalog.json";
// const initState = () => {
//   return catalog.slice(0, 3);
// };

const Header = () => {
  const basket = useAppSelector((store) => store.basket.products);

  // const [basketState, setBasketState] = useState<ICard[]>(initState);

  const { ref, isShow, setIsShow } = useShowCart(false);

  return (
    <header className="grid gap-20 py-16">
      <div className="flex justify-between ">
        <ul className={`${styles.logo_block} flex gap-10 justify-between`}>
          <li>
            <Image link="images/Mebel-Via-logo.svg" name="Mebel-Via logo" />
            <p>Мебельный дискаунтер</p>
          </li>
          <li>
            <p>Ваш регион</p>
            <p>Москва и Московская область</p>
          </li>
        </ul>
        <ul className={`${styles.contacts_block} relative flex gap-3 justify-between items-center`}>
          <li>
            <p className="font-medium">8 (495) 153-75-45</p>
            <p>ежедневно с 09:00 до 20:00 </p>
          </li>
          <li>
            <button className={"flex gap-3 items-center"}>
              <Icony name="bxs:phone-call" color="white" /> <p className="text-xl">Заказать звонок</p>
            </button>
          </li>

          <li className="flex gap-5 ">
            <Icony name="material-symbols:search" />
            <Icony name="ph:user-bold" />

            <div onClick={() => setIsShow(!isShow)} className="backet__modal relative cursor-pointer">
              <Icony name="mdi:cart-outline" />
              {basket.length > 0 && (
                <span
                  className="absolute
                bg-[#F57B0A]
                 text-white
                 text-[14px]
                  grid
                   place-content-center
                  ext-[15px]
                 -left-[10px]
                  -bottom-[15px]
                  w-[25px]
                  h-[25px] 
                p-1 
                rounded-full
                
                 "
                >
                  {basket.length}
                </span>
              )}
            </div>
          </li>
          {isShow && (
            <li ref={ref} className={`${styles.basket} border-solid border-[1px] border-gray-400 bg-white w-full max-w-[628px] grid gap-y-[17px] px-[47px] py-[31px]`}>
              <div className="close justify-self-end  cursor-pointer" onClick={() => setIsShow(!isShow)}>
                <Icony name="material-symbols:close" width="25" height="25" color="#64748b" />
              </div>
              <UserBasket />
              <div className="make__order_btn flex justify-center">
                <NavLink onClick={() => setIsShow(!isShow)} to="/order" className="w-[287px] h-[58px] hover:bg-orange-600 hover:text-white rounded-xl bg-orange-500 text-3xl text-white grid place-content-center ">
                  <p className="text-[23px] font-semibold">Оформить заказ</p>
                </NavLink>
              </div>
            </li>
          )}
        </ul>
      </div>

      <ul className={`${styles.nav__block} m-auto flex gap-2 justify-between`}>
        <li>
          <NavLink to="/" replace>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" replace>
            Каталог
          </NavLink>
        </li>

        <li>
          <NavLink to="/delivery" replace>
            Доставка и оплата
          </NavLink>
        </li>
        <li>
          <NavLink to="/exchange" replace>
            Возврат и гарантии
          </NavLink>
        </li>

        <li>Акции </li>
        <li>Гарантия лучших цен</li>

        <li>
          <NavLink to="/about" replace>
            О компании
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" replace>
            Контакты
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
