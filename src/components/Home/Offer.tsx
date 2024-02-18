import galary from "../../store/offer.json";
import { Button, Icony, Image } from "../index";
import styles from "./home.module.scss";

const Offer = () => {
  console.log(galary);
  const imgOffer = galary[0];
  return (
    <div className={`${styles.offer__container} flex  `}>
      <Image {...imgOffer} />
      <div className={`${styles.offer__container__description} self-center grid  px-16 pt-16 pb-8 `}>
        <h1>
          Мебельный <br /> дискаунтер Mebel <span>Via</span>
        </h1>
        <p>Наша фабрика специализируется на продажах через интерен по России , стран СНГ и Европа</p>
        <div className="actions flex gap-11 items-center justify-between">
          <Button isButton={false} title="Перейти в каталог" path="/catalog" buttonCLass="bg-orange-500 grid place-content-center text-white text-3xl  " />
          <div className="slider flex gap-5">
            <Icony name="ooui:next-ltr" rotate={2} color="#a6a5a5" />
            <Icony name="ooui:next-ltr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
