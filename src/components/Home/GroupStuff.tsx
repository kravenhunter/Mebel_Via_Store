import { Icony, Image } from "../index";
import styles from "./home.module.scss";
interface IProps {
  imagesStuff: string[];
}
const GroupStuff = () => {
  const imagesStuff: string[] = ["/images/home/hall.png", "/images/home/hall.png", "/images/home/kitchen.png", "/images/home/beds.png", "/images/home/comodos.png"];
  return (
    <div className={`${styles.stuff} flex justify-center gap-x-10 `}>
      <div className={`${styles.stuff__block_first}`}>
        <div className={`${styles.stuff__block_first_category} grid place-content-center`}>
          <div className="flex items-center gap-3">
            <h3>Гостинные</h3>
            <Icony name="ooui:next-ltr" width="15" height="15" />
          </div>
        </div>
        <Image link={imagesStuff[0]} name={imagesStuff[0]} />
      </div>
      <div className={`${styles.stuff__block_second} flex flex-col justify-between`}>
        <div className={`${styles.stuff__block_second_fisrt}  flex justify-between`}>
          <div className="shelfs">
            <Image link={imagesStuff[1]} name={imagesStuff[1]} />

            <div className={`${styles.stuff__block_second_fisrt_category} grid place-content-center`}>
              <div className="flex items-center gap-3">
                <h3>Шкафы</h3>
                <Icony name="ooui:next-ltr" width="15" height="15" />
              </div>
            </div>
          </div>
          <div className="kitchens">
            <Image link={imagesStuff[2]} name={imagesStuff[2]} />
            <div className={`${styles.stuff__block_second_fisrt_category} grid place-content-center`}>
              <div className="flex items-center gap-3">
                <h3>Кухни</h3>
                <Icony name="ooui:next-ltr" width="15" height="15" />
              </div>
            </div>
          </div>
          <div className="show grid  place-content-center px-14">
            <div className="flex items-center gap-3">
              <h3>Смотреть всю корпусную мебель </h3>
              <Icony name="ooui:next-ltr" width="35" height="35" color="white" />
            </div>
          </div>
        </div>
        <div className={`${styles.stuff__block_second_second}  flex justify-between`}>
          <div className="beds">
            <Image link={imagesStuff[3]} name={imagesStuff[3]} />
            <div className={`${styles.stuff__block_second_second_category} grid place-content-center`}>
              <div className="flex items-center gap-3">
                <h3>Кухни</h3>
                <Icony name="ooui:next-ltr" width="15" height="15" />
              </div>
            </div>
          </div>
          <div className="comodes">
            <Image link={imagesStuff[4]} name={imagesStuff[4]} />
            <div className={`${styles.stuff__block_second_second_category} grid place-content-center`}>
              <div className="flex items-center gap-3">
                <h3>Кухни</h3>
                <Icony name="ooui:next-ltr" width="15" height="15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupStuff;
