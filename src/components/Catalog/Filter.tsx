/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, memo } from "react";
import { IFilterSearch } from "../../types/ITypes";
import { Button } from "../index";
import styles from "./catalog.module.scss";

interface IProps {
  filter: IFilterSearch;
  // setFilter: Dispatch<React.SetStateAction<IFilterSearch>>;
  setFilter: (event: ChangeEvent<HTMLInputElement>, type: "array" | "object") => void;
  reset: () => void;
}

export const Filter = memo(({ setFilter, filter, reset }: IProps) => {
  //проверка checked
  const isRadioChecked = (prop: string, key: string) => {
    return filter[key as keyof IFilterSearch] === prop;
  };
  const isBoxChecked = (prop: string, key: string) => {
    return (filter[key as keyof IFilterSearch] as string[]).some((el) => el === prop);
  };

  // добавление фильтров
  // const enableCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event.target.value);
  //   // console.log(event.target.name);
  //   // console.log(filter[event.target.name as keyof IFilterSearch]);

  //   setFilter((prev) => {
  //     return { ...prev, [event.target.name as keyof IFilterSearch]: event.target.value };
  //   });
  // };

  // const arrayTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setFilter((prev) => {
  //     event.target.checked && (prev[event.target.name as keyof IFilterSearch] as string[]).push(event.target.value);

  //     if (!event.target.checked) {
  //       (prev[event.target.name as keyof IFilterSearch] as string[]) = (prev[event.target.name as keyof IFilterSearch] as string[]).filter((el) => el !== event.target.value);
  //     }

  //     return { ...prev };
  //   });
  // };

  return (
    <div
      className={`${styles.filter__container}   
    content-start
     w-full 
      max-w-[350px]  
          `}
    >
      <div className="show ">
        <div className="proposes  m-9 grid gap-y-9">
          <div className="clear">
            <button onClick={reset} className="bg-white text-gray-400 hover:border-none p-0 ">
              Сбросить все
            </button>
          </div>
          <p className="font-bold ">Показывать</p>

          <div className="checkbox__group font-bold flex gap-x-14  items-center ">
            <input className={`${styles.radio__box}`} type="radio" name="proposes" value="discont" onChange={(e) => setFilter(e, "object")} checked={isRadioChecked("discont", "proposes")} />
            <label htmlFor="discont">По акции</label>
          </div>
          <div className="checkbox__group font-bold flex gap-x-14  items-center ">
            <input className={`${styles.radio__box}`} type="radio" name="proposes" value="all" onChange={(e) => setFilter(e, "object")} checked={isRadioChecked("all", "proposes")} />
            <label htmlFor="all">Все предложения</label>
          </div>
        </div>

        <hr className="h-[1px] bg-gray-400" />
        <div className={`${styles.sizes}  m-9 grid gap-y-9`}>
          <p className="font-bold ">Габаритный размер, см</p>
          <div className="sizes__group ">
            <div className="sizes__group_range flex gap-x-5">
              <label className="mr-[29px]">Ширина: от </label>
              <input type="number" name="weight" onChange={(e) => setFilter(e, "object")} value={filter.weight} min="0" max="438" />
              <span>до</span>
              <input type="number" name="weight" defaultValue={150} min="0" max="438" readOnly />
            </div>
            <div className={`${styles.slider}`}>
              <input type="range" onChange={(e) => setFilter(e, "object")} value={filter.weight} name="weight" min="0" max="438" step="1" />
            </div>
          </div>
          <div className="size__group ">
            <div className="size__range flex gap-x-5">
              <label className="mr-[29px]">Высота: от </label>

              <input type="number" name="height" onChange={(e) => setFilter(e, "object")} value={filter.height} min="0" max="245" />
              <span>до</span>
              <input type="number" name="heightTo" defaultValue={150} min="0" max="245" readOnly />
            </div>
            <div className={`${styles.slider}`}>
              <input type="range" onChange={(e) => setFilter(e, "object")} value={filter.height} name="height" min="0" max="245" step="1" />
            </div>
          </div>
          <div className="size__group ">
            <div className="size__range flex gap-x-5">
              <label className="mr-[29px]">Глубина: от </label>
              <input type="number" name="depth" onChange={(e) => setFilter(e, "object")} value={filter.depth} min="0" max="235" />
              <span>до</span>
              <input type="number" name="depthto" defaultValue={150} min="0" max="235" readOnly />
            </div>
            <div className={`${styles.slider}`}>
              <input type="range" onChange={(e) => setFilter(e, "object")} value={filter.depth} name="depth" min="0" max="235" step="1" />
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="materials  m-9 grid gap-y-9">
          <p className="font-bold ">Материал обивки</p>

          <div className="materials__boxes grid gap-y-[11px]">
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="coverTypes" checked={isBoxChecked("Искусственная кожа", "coverTypes")} value="Искусственная кожа" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="sintetic">Искусственная кожа</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="coverTypes" checked={isBoxChecked("Микровелюр", "coverTypes")} value="Микровелюр" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="microvelure">Микровелюр</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="coverTypes" checked={isBoxChecked("Экокожа", "coverTypes")} value="Экокожа" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="eco">Экокожа</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="coverTypes" checked={isBoxChecked("Велюр", "coverTypes")} value="Велюр" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="velure">Велюр</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="coverTypes" checked={isBoxChecked("Рогожка", "coverTypes")} value="Рогожка" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="rogojca">Рогожка</label>
            </div>
            <div className="show">
              <Button isButton={false} title="Показать все" />
            </div>
          </div>
        </div>
        <div className="materials  m-9 grid gap-y-9">
          <p className="font-bold ">Материал каркаса</p>
          <div className="materials__boxes grid gap-y-[11px]">
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("Массив", "carcasTypes")} value="Массив" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="massive">Массив</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("Пластик", "carcasTypes")} value="Пластик" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="plasric">Пластик</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("ДВП", "carcasTypes")} value="ДВП" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="dvp">ДВП</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("Шпон", "carcasTypes")} value="Шпон" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="shpon">Шпон</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("Стекло", "carcasTypes")} value="Стекло" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="glass">Стекло</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input onChange={(e) => setFilter(e, "array")} name="carcasTypes" checked={isBoxChecked("Металл", "carcasTypes")} value="Металл" className={`${styles.input__box}`} type="checkbox" />
              <label htmlFor="metall">Металл</label>
            </div>
            <div className="show">
              <Button isButton={false} title="Показать все" />
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="materials  m-9 grid gap-y-9">
          <p className="font-bold ">Материал раскладки</p>
          <div className="materials__boxes grid gap-y-[11px]">
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input className={`${styles.input__box}`} type="checkbox" id="roller" name="roller" />
              <label htmlFor="roller">Выкатной</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input className={`${styles.input__box}`} type="checkbox" id="eurobook" name="eurobook" />
              <label htmlFor="eurobook">Еврокнижка</label>
            </div>
            <div className="checkbox__group flex gap-x-[36px]  items-center">
              <input className={`${styles.input__box}`} type="checkbox" id="puller" name="puller" />
              <label htmlFor="puller">Выдвижной</label>
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="materials  m-9 grid gap-y-9">
          <p className="font-bold ">Цвет фасада</p>
          <div className="materials__boxes grid gap-y-[11px]">
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="fasadeColors" checked={isBoxChecked("Серый", "fasadeColors")} value="Серый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-gray-300 rounded-[4px]"></div>
              <label htmlFor="puller">Серый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="fasadeColors" checked={isBoxChecked("Бежевый", "fasadeColors")} value="Бежевый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-orange-300 rounded-[4px]"></div>
              <label htmlFor="beje">Бежевый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="fasadeColors" checked={isBoxChecked("Коричневый", "fasadeColors")} value="Коричневый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-orange-900 rounded-[4px]"></div>
              <label htmlFor="brown">Коричневый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="fasadeColors" checked={isBoxChecked("Черный", "fasadeColors")} value="Черный" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-black rounded-[4px]"></div>
              <label htmlFor="black">Черный</label>
            </div>
            <div className="show">
              <Button isButton={false} title="Показать все" />
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="materials  m-9 grid gap-y-9">
          <p className="font-bold ">Цвет столешницы</p>
          <div className="materials__boxes grid gap-y-[11px]">
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="tableColors" checked={isBoxChecked("Серый", "tableColors")} value="Серый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-gray-300 rounded-[4px]"></div>
              <label htmlFor="puller">Серый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="tableColors" checked={isBoxChecked("Бежевый", "tableColors")} value="Бежевый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-orange-300 rounded-[4px]"></div>
              <label htmlFor="beje">Бежевый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="tableColors" checked={isBoxChecked("Коричневый", "tableColors")} value="Коричневый" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-orange-900 rounded-[4px]"></div>
              <label htmlFor="brown">Коричневый</label>
            </div>
            <div className="checkbox__group flex gap-x-[26px] items-center">
              <input onChange={(e) => setFilter(e, "array")} name="tableColors" checked={isBoxChecked("Черный", "tableColors")} value="Черный" className={`${styles.input__box}`} type="checkbox" />
              <div className=" w-[17px] h-[17px] bg-black rounded-[4px]"></div>
              <label htmlFor="black">Черный</label>
            </div>
            <div className="show">
              <Button isButton={false} title="Показать все" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
