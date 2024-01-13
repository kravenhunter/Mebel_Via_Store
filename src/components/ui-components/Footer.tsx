import { Button, Icony } from "../index";
import styles from "./ui.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer__container} `}>
      <div className="footer__container__content flex justify-around align-middle items-start  py-28">
        <div className="footer__container__content_about grid gap-y-16">
          <h4>О Mebel Via</h4>
          <ul className="grid gap-y-12">
            <li>О компании</li>
            <li>Возврат и обмен</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
            <li>Оферта</li>
          </ul>
        </div>
        <div className={`${styles.footer__container__content_subsctibe} flex flex-col gap-8 `}>
          <h4>Подпишись на лучшие преложения</h4>
          <form className="grid gap-y-16">
            <input type="text" placeholder="Введите свой  email" />
            <div className={`${styles.footer__container__content_actions} flex justify-between`}>
              <Button title="Подписаться" buttonCLass="bg-orange-500 text-2xl  text-white" />
              <p>Нажимая на кнопку вы подтверждаете, что даете согласие на обработку персональных данных</p>
            </div>
          </form>
        </div>
        <div className="footer__container__content_store grid gap-y-16">
          <h4>Магазин</h4>
          <ul className="grid gap-y-12">
            <li>Акции</li>
            <li>Гарантия лучших цен</li>
            <li>Полезные статьи</li>
            <li>Карта сайта</li>
          </ul>
        </div>
        <div className="footer__container__content_socials self-start  flex flex-col gap-y-12 ">
          <h4>Наши социальные сети</h4>
          <div className="sicial__list flex gap-x-5">
            <Icony name="ri:instagram-fill" />
            <Icony name="mdi:twitter" />
            <Icony name="mingcute:vkontakte-fill" />
            <Icony name="mingcute:facebook-fill" />
            <Icony name="ic:baseline-telegram" />
            <Icony name="ri:whatsapp-fill" />
          </div>
          <p className="font-semibold">8 (495) 153-70-60</p>
        </div>
      </div>
      <hr className="bg-gray-300 " />
      <div className="footer__container__copiright grid place-content-center py-20 ">
        <p className="text-gray-500">Copyright © 2023 Created by Sergio Belov</p>
      </div>
    </footer>
  );
};

export default Footer;
