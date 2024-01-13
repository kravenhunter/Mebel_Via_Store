import { Link } from "react-router-dom";
import { Icony, Image } from "../components";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about__container  mx-auto max-w-[1200px] grid gap-y-[20px] pb-[90px] ">
        <div className="category__path">
          <ul className="flex text-[16px] text-gray-400 items-center gap-x-3 ">
            <li>
              <Link to="/" replace className="text-gray-400 hover:text-gray-700">
                Интернет-магазин
              </Link>
            </li>
            <li>
              <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
            </li>

            <li>О компании</li>
          </ul>
        </div>
        <h3 className="mt-8 text-center">О КОМПАНИИ </h3>
        <div className="benefits grid  gap-y-[20px] ">
          <h4 className=" leading-[22px] justify-self-center mt-8 text-[18px]  font-normal  text-center w-[250px]">У НАС ЛУЧШАЯ ЦЕНА НА РЫНКЕ И ВОТ ПОЧЕМУ </h4>
          <div className="benefits__items flex flex-wrap gap-[80px] justify-between">
            <div className="item grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px] leading-[22px]">У нас нет гипермаркетов: мы не содержим армию продавцов и не обслуживаем гектары арендных площадей.</p>
            </div>
            <div className="item grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px] leading-[22px]">Собственные фабрики позволяют нам не работать с перекупщиками и экономить на их комиссиях.</p>
            </div>
            <div className="item grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px] leading-[22px]">Производство и склады сделаны так, чтобы максимально снизить издержки.</p>
            </div>
            <div className="item grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px] leading-[22px]"> В отличие от раскрученных мебельных компаний, мы не вкладываем деньги в масштабный PR.</p>
            </div>
          </div>
        </div>
        <p className="text-[16] text-center mt-[20px]">В итоге цена на нашу продукцию ниже, чем у конкурентов. Некоторые позиции могут быть дешевле в 2-3 раза.</p>
        <hr className="h-[1px] w-full bg-gray-300" />
        <div className="cuality flex justify-between">
          <div className="max-w-[660px]">
            <Image link="/images/others/about-couch-quality.webp" name="map" />
          </div>
          <div className="cuality__desk  max-w-[496px] p-[40px] flex flex-col gap-y-[15px] ">
            <h5 className="text-[18px] ">ВЫСОКОЕ КАЧЕСТВО МЕБЕЛИ</h5>
            <p className="text-[16px] leading-[22px]">
              Всю мебель мы производим из безопасных материалов и комплектующих. Детали изготовлены на высокоточном европейском оборудовании и проходят строгий контроль качества. Мебель сертифицирована и соответствует
              необходимым ГОСТам.
            </p>
          </div>
        </div>
        <div className="economy grid place-content-center justify-center">
          <div className="max-w-[660px]">
            <Image link="/images/others/about-delivery.webp" name="map" />
          </div>
          <div className="cuality__desk mx-auto max-w-[496px] p-[40px] flex flex-col gap-y-[15px]">
            <h5 className="text-[18px] ">БЫСТРАЯ ЭКОНОМИЧНАЯ ДОСТАВКА</h5>
            <p className="text-[16px] leading-[22px]">
              Всю мебель мы производим из безопасных материалов и комплектующих. Детали изготовлены на высокоточном европейском оборудовании и проходят строгий контроль качества. Мебель сертифицирована и соответствует
              необходимым ГОСТам.
            </p>
          </div>
        </div>
        <div className="professionals flex justify-between">
          <div className=" max-w-[496px] p-[40px] flex flex-col gap-y-[15px] ">
            <h5 className="text-[18px] ">ПРОФЕССИОНАЛЬНАЯ СБОРКА</h5>
            <p className="text-[16px] leading-[22px]">
              Всю мебель мы производим из безопасных материалов и комплектующих. Детали изготовлены на высокоточном европейском оборудовании и проходят строгий контроль качества. Мебель сертифицирована и соответствует
              необходимым ГОСТам.
            </p>
          </div>
          <div className="max-w-[660px]">
            <Image link="/images/others/about-assemble.webp" name="map" />
          </div>
        </div>
        <hr className="h-[1px] w-full bg-gray-300" />
        <div className="waranty grid gap-y-[50px]">
          <div className="producer max-w-[416px] mx-auto grid text-center gap-y-[20px]">
            <div className="justify-self-center icon w-[60px] h-[60px] rounded-full  bg-[#bb9f8b] grid place-content-center">
              <Icony name="ant-design:safety-certificate-outlined" width="40" height="40" color="white" />
            </div>
            <h5 className="text-[18px] ">ГАРАНТИЯ ПРОИЗВОДИТЕЛЯ</h5>
            <p className="leading-[22px]">
              Иногда даже надежные вещи ломаются. Мы создали условия, чтобы вы не слишком расстроились по поводу поломки: предусмотрели множество удобных каналов для оперативной связи с нами и долгий гарантийный срок,в
              течение которого мы починим мебель.
            </p>
          </div>
          <div className="icons flex justify-between">
            <div className="return  max-w-[416px]  grid text-center gap-y-[20px]">
              <div className="justify-self-center icon w-[60px] h-[60px] rounded-full  bg-[#bb9f8b] grid place-content-center">
                <Icony name="icon-park-outline:return" width="40" height="40" color="white" />
              </div>
              <h5 className="text-[18px] ">ВОЗМОЖНОСТЬ ВЕРНУТЬ МЕБЕЛЬ</h5>
              <p className="leading-[22px]">
                Бывает, что вещи, которые сначала понравились, могут не подойти. По закону мебель является невозвратным товаром, но мы уважаем ваш выбор и идем вам навстречу: если по каким-то причинам вы решите вернуть
                мебель, мы готовы принять ее обратно.
              </p>
            </div>
            <div className="heart  max-w-[416px]  grid text-center gap-y-[20px]">
              <div className="justify-self-center icon w-[60px] h-[60px] rounded-full  bg-[#bb9f8b] grid place-content-center">
                <Icony name="mdi:heart-outline" width="40" height="40" color="white" />
              </div>
              <h5 className="text-[18px] ">ПОЛИТИКА ОТКРЫТОСТИ</h5>
              <p className="leading-[22px]">
                При больших объемах производства и продаж накладки иногда случаются, и к клиенту может приехать бракованный товар. В отличие от других мебельных компаний, мы не скрываем отзывы о таких случаях, поскольку
                хотим быть честными со своими клиентами и даем им возможность принять взвешенное решение.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-[1px] w-full bg-gray-300" />
        <div className="customers grid gap-y-[30px] justify-center text-center">
          <h5 className="text-[18px]  ">ПРИЗНАНИЕ ПОКУПАТЕЛЕЙ</h5>
          <ul className="flex justify-center text-[16px] gap-x-[30px]">
            <li className="w-[195px]">
              <h3 className="font-normal">11 000</h3>
              заказов в месяц
            </li>
            <li className="w-[195px]">
              <h3 className="font-normal">2 млрд</h3>
              сумма продаж за год
            </li>
            <li className="w-[195px]">
              <h3 className="font-normal">35%</h3>
              покупателей приходят по рекомендации друзей
            </li>
            <li className="w-[195px]">
              <h3 className="font-normal">топ 5</h3>
              мебельных интернет-компаний в России
            </li>
          </ul>
        </div>
        <p className="text-[16px] justify-self-center"> Эти факты говорят о том, что нас выбирают не за раскрученное имя, а за лучшее сочетание цены и качества.</p>
      </div>
    </div>
  );
};

export default About;
