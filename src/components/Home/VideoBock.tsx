import { Icony, Image } from "../index";
import styles from "./home.module.scss";

const VideoBock = () => {
  return (
    <div className={`${styles.about} flex m-auto justify-around gap-8 `}>
      <div className={`${styles.about__play} grid `}>
        <Image link="/images/home/Worker1.jpg" name="worker-1" />
        <button className={`place-self-center`}>
          <Image link="/images/home/play_button.svg" name="play_video" />
        </button>
      </div>

      <div className={`${styles.about__description}   grid justify-between  `}>
        <h2>Интернет-магазин мебели “MebelVia.ru”</h2>
        <div className={`${styles.about__description_first} flex gap-16 `}>
          <Icony name="emojione:bed" color="#a6a5a5" width="64" height="64" />
          <p>Мы первые и единственные в России специализировани свое производство для распространения товаров на продажах в интернет</p>
        </div>
        <div className={`${styles.about__description_second} grid gap-4 `}>
          <p>Сделать выбор легко: в нашем интернет магазине сделано все для удобства поиска и быстрой доставки нужного всем товара</p>
          <p>Еще пристальнее, мы следим за стоимостью товаров , постоянно снижая или убирая традиционные затраты.</p>
        </div>
        <div className={`${styles.about__description_third}  grid place-content-center  `}>
          <strong className="text-4xl">Дешевая мебель - не значит плохая и мы беремся вам это доказать</strong>
        </div>
      </div>
    </div>
  );
};

export default VideoBock;
