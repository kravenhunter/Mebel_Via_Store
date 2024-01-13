import { Icony } from "./index";

interface IProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Confirmation = ({ setShow }: IProps) => {
  return (
    <div
      className="confirm
       max-w-[373px]
        border-solid
         border-[1px]
          border-gray-300
           rounded-[5px] grid gap-y-[20px] pt-[19px] pb-[40px] px-[19px]"
    >
      <div className="close justify-self-end  cursor-pointer" onClick={() => setShow((prev) => (prev = !prev))}>
        <Icony name="material-symbols:close" width="25" height="25" color="#64748b" />
      </div>
      <div className="in__store justify-self-center">
        <Icony name="carbon:checkmark-outline" width="100" height="100" color="#F57B0A" />
      </div>
      <h2 className="text-center">Спасибо за вашу заявку</h2>
      <p className="text-center text-[16px]">Наши менеджеры свяжутся с вами как можно скорее</p>
      <hr className="bg-gray-400 w-full h-[1px]" />
      <p className="text-center text-[14px]">Следите за нами в социальных сетях</p>
      <div className="sicial__list flex gap-x-5 justify-self-center">
        <Icony name="ri:instagram-fill" color="#64748b" />
        <Icony name="mdi:twitter" color="#64748b" />
        <Icony name="mingcute:vkontakte-fill" color="#64748b" />
        <Icony name="mingcute:facebook-fill" color="#64748b" />
        <Icony name="ic:baseline-telegram" color="#64748b" />
        <Icony name="ri:whatsapp-fill" color="#64748b" />
      </div>
    </div>
  );
};

export default Confirmation;
