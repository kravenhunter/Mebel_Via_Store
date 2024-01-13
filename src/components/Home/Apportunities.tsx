import { Image } from "../index";
import styles from "./home.module.scss";

const Apportunities = () => {
  return (
    <div className={`${styles.benefits} flex m-auto justify-around gap-8 `}>
      <div className={`${styles.benefits__desctiprions} grid justify-between`}>
        <div className="grid">
          <h2>Наши преимущества</h2>

          <p>Помимо товаров производства собственной фабрики , мы предлагаем товары от других поставщиков - это предоставляет вам еще больший выбор </p>
        </div>

        <div className={`${styles.benefits__icons} flex flex-wrap justify-between `}>
          <div className="icon__group flex gap-8 items-center ">
            <Image link="/images/home/Boxes.svg" name="Boxes" />
            <p>Расположена в ближайшем подмосковье - доставка со сроком от одного дня </p>
          </div>
          <div className="icon__group flex items-center gap-8">
            <Image link="/images/home/Certificate.svg" name="Certificate" />
            <p>Все виды мебели проъодят обязательную сертификацию</p>
          </div>
          <div className="icon__group flex items-center gap-8">
            <Image link="/images/home/Bed.svg" name="Bed" />
            <p>Быстрое реагирование на изменение моды и спроса - наши склады не заполняются неликвидом </p>
          </div>
          <div className="icon__group flex items-center gap-8 ">
            <Image link="/images/home/Drill.svg" name="Drill" />
            <p>Постоянно контролируем и улучкаем служму доставки и сборки </p>
          </div>
        </div>
      </div>
      <div className={`${styles.benefits__image} flex justify-end  `}>
        <Image link="/images/home/Worker2.jpg" name="worker-2" />
        <h2 className="self-center">Работаем с 2010 года</h2>
      </div>
    </div>
  );
};

export default Apportunities;
