import { useState } from "react";
import { Link } from "react-router-dom";
import { Icony, YandexMap } from "../components";

const Contacts = () => {
  const [selecteStore, setSelected] = useState("Перово");
  const [location, setLocation] = useState([55.755018, 37.798089]);
  //55.938098, 37.314921
  const onSelectedHandler = (store: string) => {
    console.log();

    setSelected(store);
    store === "Перово" &&
      setLocation((prev) => {
        prev = [55.755018, 37.798089];
        return prev;
      });
    store === "Химки" &&
      setLocation((prev) => {
        prev = [55.938098, 37.314921];
        return prev;
      });
    console.log(selecteStore);
    console.log(store);
    console.log(location);
  };
  return (
    <div className="wrapper">
      <div className="contacts__container  mx-auto max-w-[1200px] grid gap-y-[20px] pb-[90px]">
        <ul className="flex text-[16px] text-gray-400 items-center gap-x-3 ">
          <li>
            <Link to="/" replace className="text-gray-400 hover:text-gray-700">
              Интернет-магазин
            </Link>
          </li>
          <li>
            <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
          </li>

          <li>Контакты</li>
        </ul>
        <h3 className="mt-8 text-center">КОНТАКТЫ </h3>
        <div className="sails flex gap-x-[30px] justify-between">
          <div className="sail__office bg-gray-100 grid gap-y-[20px]  py-[20px] px-[30px]">
            <p className="text-center text-[18px] font-semibold">ОТДЕЛ ПРОДАЖ</p>
            <ul className="text-[16px] flex gap-x-[30px]">
              <li>+7 (495) 999-99-55 </li>
              <li>08:00 – 22:00 Ежедневно</li>
              <li>info@mebelvia.ru</li>
            </ul>
          </div>
          <div className="service__office  bg-gray-100 grid gap-y-[20px]  py-[20px] px-[30px]">
            <p className="text-center text-[18px] font-semibold">ОТДЕЛ СЕРВИСА</p>
            <ul className="text-[16px]  flex gap-x-[30px]">
              <li>+7 (495) 999-99-55 </li>
              <li>09:00 – 17:00 Пн.–пт.</li>
              <li>service@mebelvia.ru</li>
            </ul>
          </div>
        </div>
        <div className="map pt-[20px]">
          <p className="mb-[30px] max-w-[375px] pb-[10px] text-[18px] font-semibold border-solid border-b-[2px] border-orange-600">ШОУРУМЫ В МОСКВЕ И ПОДМОСКОВЬЕ</p>
          <div className="map__block flex">
            <ul className="text-[15px]">
              <li
                onClick={() => onSelectedHandler("Перово")}
                className={`${selecteStore === "Перово" && "bg-orange-100 border-solid border-b-[1px] border-orange-500"} cursor-pointer p-[20px] flex flex-col gap-y-[10px] `}
              >
                <p>Магазин в Перово</p>
                <p className="flex items-center gap-x-[10px]">
                  <Icony name="simple-icons:shanghaimetro" width="20" height="20" color="#F57B0A" /> Перово
                </p>
                <p>ул. Новогиреевская, д. 29, корпус 1</p>
                <ul className="flex ">
                  <li>+7 (495) 742-99-54</li>
                  <li>+7 (495) 742-99-54</li>
                </ul>
                <p>10:00 – 21:00 Ежедневно</p>
              </li>
              <li
                onClick={() => onSelectedHandler("Химки")}
                className={`${selecteStore === "Химки" && "bg-orange-100 border-solid border-b-[1px] border-orange-500"}  cursor-pointer p-[20px] flex flex-col gap-y-[10px] `}
              >
                <p>г.Химки. Мегамагазин 1000 кв.м!</p>
                <p>мкрн. Сходня, Новосходненское ш. д. 140, ТЦ "Идея мебель"</p>
                <p>ул. Новогиреевская, д. 29, корпус 1</p>
                <ul className="flex ">
                  <li>+7 (495) 317-01-49</li>
                </ul>
                <p>10:00 – 21:00 Ежедневно</p>
              </li>
            </ul>
            <div className="map__search ">
              {/*   <Image link="/images/others/map.png" name="map" /> */}
              <YandexMap location={location} />
            </div>
          </div>
        </div>
        <div className="requisits grid gap-y-[20px] mt-[70px]">
          <p className=" text-[18px] font-semibold">НАШИ РЕКВИЗИТЫ</p>
          <ul className=" text-[16px] grid gap-y-[10px]">
            <li>ООО «СПУТНИК» </li>
            <li>ИНН: 555555555 </li>
            <li>КПП: 555555555 </li>
            <li>
              <b>Почтовый адрес:</b> 141420, Московская область, г. Химки, мкр. Сходня, ул. Чапаева, д. 7, а/я 710 для ООО СПУТНИК{" "}
            </li>

            <li>
              <b>Юридический адрес:</b> 141542, РФ, Московская область, г. Солнечногорск, п. Смирновка, владение 3, строение 2, офис 2 <br />
              Свидетельство о государственной регистрации запись внесена в ЕГРОЮЛ Межрайонной инспекцией Федеральной налоговой службы №23 по Московской области{" "}
            </li>
            <li>
              <b>Банковские реквизиты:</b>р/с 555555555555555 в ПАО "Промсвязьбанк" г. Москва, кор/счет 555555555555555,
            </li>
            <li>
              <b>БИК:</b> 555555555
            </li>
            <li>
              <b>ОГРН:</b>555555555
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
