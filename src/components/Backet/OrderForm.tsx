/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent, useState } from "react";

interface IProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IForm {
  name: string;
  secondName: string;
  lastName: string;
  phone: string;
  email: string;
  adress: string;
  question: string;
}

const initForm = () => {
  return {
    name: "",
    secondName: "",
    lastName: "",
    phone: "",
    email: "",
    adress: "",
    question: "",
  };
};
const OrderForm = ({ setShow }: IProps) => {
  const [form, setForm] = useState<IForm>(initForm);

  const sendForm = (e: SyntheticEvent) => {
    console.log(e);
    e.preventDefault();
    if (form.name && form.secondName && form.lastName && form.secondName && form.email && form.phone && form.adress && form.question) {
      console.log(form);
      setShow((prev) => (prev = !prev));
    } else {
      console.log("Wron fiels");
      console.log(form);
    }
  };

  return (
    <div className="send__form m-auto max-w-[596px] w-full grid gap-y-[30px]">
      <h3>Заполните форму для оформления заказа</h3>

      <form onSubmit={sendForm} className=" grid gap-y-[30px]">
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.name = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="text"
          placeholder="ВАШЕ ИМЯ"
        />
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.secondName = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="text"
          placeholder="ФАМИЛИЯ"
        />
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.lastName = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="text"
          placeholder="ОТЧЕСТВО"
        />
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.phone = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="text"
          placeholder="ТЕЛЕФОН"
        />
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.email = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="email"
          placeholder="EMAIL"
        />
        <input
          onChange={(e) =>
            setForm((prev) => {
              prev.adress = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          type="text"
          placeholder="Страна, индекс, город, улица, квартира "
        />

        <textarea
          onChange={(e) =>
            setForm((prev) => {
              prev.question = e.target.value;
              return prev;
            })
          }
          className="py-[18px] px-[23px] text-[20px] bg-gray-200 text-gray-600"
          name="question"
          id=""
          cols={30}
          rows={10}
          placeholder="ВАШ ВОПРОС"
        ></textarea>
        <button type="submit" className="w-[287px] h-[58px] hover:bg-orange-600 hover:text-white rounded-xl bg-orange-500 text-3xl text-white grid place-content-center ">
          <p className="text-[23px] font-semibold">Оформить заказ</p>
        </button>
        <small className="max-w-[352px] text-[14px] text-gray-400">Нажимая на кнопку вы подтверждаете, что даете согласие на обработку персональных данных</small>
      </form>
    </div>
  );
};

export default OrderForm;
