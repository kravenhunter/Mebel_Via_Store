import { Icony } from "../index";
import styles from "./catalog.module.scss";
const Categories = () => {
  const categories = [
    {
      iconLink: "cil:sofa",
      title: "Мягкая мебель",
    },
    {
      iconLink: "mdi:stove",
      title: "Кухня и Столовая",
    },
    {
      iconLink: "material-symbols:dresser-outline",
      title: "Корпусная мебель",
    },
    {
      iconLink: "emojione-monotone:bed",
      title: "Мебель для спальни",
    },
    {
      iconLink: "mdi:closet-outline",
      title: "Шкафы",
    },
    {
      iconLink: "fluent:premium-32-regular",
      title: "Премиум мебель",
    },
    {
      iconLink: "wpf:desk-lamp",
      title: "Освещение",
    },
    {
      iconLink: "mdi:sale-outline",
      title: "Распродажа",
    },
  ];

  return (
    <div className={`${styles.categories__container} flex justify-between gap-2 m-auto my-20`}>
      {categories?.map((el, index) => (
        <div className="grid gap-6 justify-items-center" key={index}>
          <a href="#">
            <Icony name={el.iconLink} width="83" height="83" color="#a6a5a5" />
          </a>
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
