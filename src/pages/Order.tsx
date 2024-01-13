import { useState } from "react";
import { Confirmation, OrderForm, UserBasket } from "../components";

const Order = () => {
  // const [basketState, setBasketState] = useState<ICard[]>(initState);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="order relative">
      {confirm && (
        <div className="modal bg-white absolute top-[40%] right-[40%]">
          <Confirmation setShow={setConfirm} />
        </div>
      )}

      <UserBasket />
      <OrderForm setShow={setConfirm} />
    </div>
  );
};

export default Order;
