/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

// Хук для сокрытия корзины если кликать по пустому месту
export const useShowCart = (initVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = useState(initVisible);

  // при нажатии на кнопку Cart цепляем  на div  реактивный ref
  const ref = useRef<HTMLElement>(null);

  // проверяем если ref содержит элемент и
  // событие клика   по любому месту   на сайте
  // которое в себе содержит  запись клика по   нод элементу на сайте
  // event.target
  // и этот нод элемент не совпадает с  ref
  // то закрываем модалку
  const handleClickShow = (event: any) => {
    console.log(event);
    if (ref.current && !ref.current.contains(event.target)) {
      console.log(ref.current);
      console.log(event.target);
      setIsShow(false);
    }
  };

  useEffect(() => {
    console.log("render");

    document.addEventListener("click", handleClickShow, true);
    return () => {
      document.removeEventListener("click", handleClickShow, true);
    };
  });
  return { ref, isShow, setIsShow };
};
