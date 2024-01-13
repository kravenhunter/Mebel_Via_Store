import { Link } from "react-router-dom";
import { Icony } from "../components";

const Delivery = () => {
  return (
    <div className="delivery__container">
      <div className="delivery__block  mx-auto max-w-[1200px] grid gap-y-[20px] pb-[90px]">
        <ul className="flex text-[16px] text-gray-400 items-center gap-x-3 ">
          <li>
            <Link to="/" replace className="text-gray-400 hover:text-gray-700">
              Интернет-магазин
            </Link>
          </li>
          <li>
            <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
          </li>

          <li>Доставка, оплата и сборка</li>
        </ul>

        <div className="benefits grid gap-y-[35px]">
          <h3 className="mt-8 text-center">ДОСТАВКА, ОПЛАТА И СБОРКА </h3>
          <ul className="flex justify-between">
            <li className="grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px]">Доставим быстро, соберeм на совесть.</p>
            </li>
            <li className="grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px]">Берем оплату, только когда вы осмотрели и одобрили товар.</p>
            </li>
            <li className="grid justify-center  text-center gap-y-[20px] max-w-[350px]">
              <div className="in__store justify-self-center">
                <Icony name="carbon:checkmark-outline" width="40" height="40" color="#F57B0A" />
              </div>
              <p className="text-[16px]">Передумали? Быстро привезем замену или вернем деньги.</p>
            </li>
          </ul>
        </div>
        <hr className="h-[1px] w-full bg-gray-300" />
        <div className="delivary__details  grid gap-y-[30px]">
          <h3 className="mt-8 text-center">ДОСТАВКА ПО МОСКВЕ И ОБЛАСТИ</h3>
          <p className="text-[16px]">Мы доставляем мебель с 10:00 до 23:00 по пути следования маршрута автотранспорта. Заносим в квартиру/частный дом. Есть услуга сборки и установки.</p>
          <p className="text-[16px]">Подъем мебели на лифте бесплатный. Ручной подъем: 200 ₽ за этаж.</p>
          <table className="text-[16px]">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-[450px]">ГРУЗ</th>
                <th className="py-[10px]">
                  ДОСТАВКА <br />
                  Внутри МКАД
                </th>
                <th>За МКАД</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-solid border-b-[1px] border-gray-300">
                <td className="py-[30px] ">Мебель весом до 10 кг или длиной не более 180 см полки, зеркала, детские матрасы</td>
                <td className="text-center">От 0 ₽ до 690 ₽</td>
                <td></td>
              </tr>
              <tr className="border-solid border-b-[1px] border-gray-300">
                <td className="py-[30px] ">Мебель весом от 10 кг или длиной свыше 180 см комоды, тумбы, столы и стулья, шкафы, кровати</td>
                <td className="text-center">От 0 ₽ до 1 390 ₽</td>
                <td className="text-center">+30 ₽ / км от МКАД</td>
              </tr>
              <tr className="border-solid border-b-[1px] border-gray-300">
                <td className="py-[30px] ">Диван</td>
                <td className="text-center">От 0 ₽ до 1 590 ₽</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="text-[16px]"> Субботняя доставка на 250 ₽ дороже</p>
          <h3 className="mt-8 text-center">ДОПОЛНИТЕЛЬНАЯ УСЛУГА «ДОСТАВКА ПО ВРЕМЕНИ» В ПРЕДЕЛАХ МКАД</h3>
          <ul className="text-[16px] pl-[20px] ">
            <li className="list-disc">Доставка на следующий день возможна при заказе товара до 13:00 </li>
            <li className="list-disc">Доставка с 10:00 до 14:00 +300 ₽ </li>
            <li className="list-disc"> Доставка с 14:00 до 23:00 +300 ₽</li>
            <li className="list-disc"> Доставка в оговоренный двухчасовой интервал +1 000 ₽</li>
          </ul>
        </div>
        <div className="customize__furniture  grid gap-y-[30px]">
          <h3 className="mt-8 text-center"> СБОРКА МЕБЕЛИ</h3>
          <table className="text-[16px]">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-[10px] w-[50vw]">ИЗДЕЛИЕ</th>

                <th className="w-[50vw]">СБОРКА</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-solid border-b-[1px] border-gray-300">
                <td className="py-[30px] ">
                  Корпусная мебель
                  <br />
                  комоды, тумбы, столы, шкафы, кровати и пр.
                </td>
                <td>10% от стоимости мебели, но не менее 1500 р.</td>
              </tr>
              <tr className="border-solid border-b-[1px] border-gray-300">
                <td className="py-[30px] ">
                  Диван <br />в день доставки
                </td>
                <td>790 ₽</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[16px]">
            Если сборка дивана будет осуществляться не в день доставки, и мастеру нужно будет приехать еще раз, то стоимость составит 1 200 ₽<br />
            <br />
            Выезд сборщика:
            <br />
            По Москве - бесплатно.
            <br />
            От МКАД до Московского малого кольца («первой бетонки»): 1 км - 20 руб.
            <br />
            От Московского малого кольца: 1 км - 40 руб.
          </p>
          <p className="text-[16px]">
            Сборка мебели может быть шумным делом, поэтому мы её осуществляем только с 9 утра до 7 вечера, с перерывом с часу до трёх дня. А в воскресенье или праздничный день шуметь нельзя вообще. <br />
            Это не только вежливость, но и закон: сборка в иное время может навлечь административный штраф. Однако если Вы заручились согласием соседей, то сборку можно производить в любое время.
          </p>
        </div>
        <div className="conditions grid gap-y-[30px]">
          <h3 className="mt-8 text-center"> ОСОБЫЕ УСЛОВИЯ ДОСТАВКИ И СБОРКИ</h3>
          <p className="text-[16px]">
            Для некоторых товаров действуют особые условия. В таких случаях мы обязательно пишем об этом на страницах каждого такого товара. <br />
            <br />
            Чаще всего особые условия удешевляют или делают бесплатными доставку и сборку. Реже услуги становятся дороже из-за дополнительных сложностей. <br />
            <br />
            Особые условия всегда имеют приоритет над обычными условиями. Например, если в особых условиях какого-то дивана указана бесплатная доставка, то и привезем мы бесплатно, а не по стандартной стоимости 1 590 ₽.
          </p>
        </div>
        <div className="specifications grid gap-y-[30px] ">
          <h3 className="mt-8 text-center"> ЦВЕТОПЕРЕДАЧА И КОМПЛЕКТАЦИЯ</h3>
          <p className="text-[16px]">
            Экран монитора не всегда может корректно передать цвет готового изделия. Пожалуйста, проверьте цвет во время доставки мебели. Если оттенок не соответствует Вашим ожиданиям, мы сразу заберём мебель назад и
            будем готовы предложить Вам другой вариант.
            <br />
            <br />
            Для некоторых фотографий товара на сайте используются элементы декора: вазы, цветы, декоративные подушки, мойки, холодильники и т.д. Такие предметы не являются частью товара, поэтому не включены в стоимость.
            Полная информация о составе всегда есть на странице каждого товара.
            <br />
            <br />
            Учитывая постоянное совершенствование технологий и материалов, вся информация, представленная на сайте, не является конечной и может быть рассмотрена как справочная.
          </p>
        </div>
        <div className="rules  grid gap-y-[30px]">
          <h3 className="mt-8 text-center"> ПРАВИЛА ПРИЕМА МЕБЕЛИ</h3>
          <p className="text-[16px]">Соблюдение этих правил обеспечивает сохранность товарного вида мебели и гарантирует качество сборки. Отнеситесь к их выполнению ответственно.</p>
          <ul className="text-[16px] pl-[20px]  grid gap-y-[10px]">
            <li className="list-decimal">
              Подъезд к дому должен быть свободен. Если такой возможности нет, ручная доставка мебели до подъезда будет стоить 200 рублей за каждые 10 метров. Обратите внимание! Первые 20 метров — бесплатно.{" "}
            </li>
            <li className="list-decimal"> Время доставки мы согласовываем за день и приезжаем вовремя. Если покупателя нет на месте, ожидание свыше 20 минут до 1 часа платное — 600 ₽. Повторная доставка платная. </li>
            <li className="list-decimal">
              Помещение должно быть освобождено от другой мебели и прочих вещей, мешающих заносу и сборке, или которые могут быть повреждены во время сборки. Пол должен быть закрыт картоном или другим материалом.{" "}
            </li>
            <li className="list-decimal"> Ширина дверных проемов и коридоров при доставке мягкой мебели должна составлять не менее 80 см по ширине и 190 см по высоте. </li>
            <li className="list-decimal">
              Размеры помещения при заказе шкафа-купе должны соответствовать требованиям: глубина помещения не менее 3,4 м, ширина — не менее каталожных размеров шкафа плюс 1 метр, высота потолков — не менее 2,5 м.{" "}
            </li>
          </ul>
          <p className="text-[16px]">С целью сохранить мебель мы не собираем ее в тесных помещениях - на лестничных клетках, балконах и в нишах.</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
