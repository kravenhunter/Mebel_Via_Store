import { useState } from "react";
import { Icony } from "./../components/index";
// import { textSliceActions } from "../../store/textSlice";
// import { useAppDispatch, useAppSelector } from "../hooks";

// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks/test";
import { addText, deleteText } from "../store/counter/countSlice";

const SecondPage = () => {
  const [text, setText] = useState("");
  // const [confirm, setConfirm] = useState(false);
  const textList = useAppSelector((state) => state.counter.testArr);

  const dispatch = useAppDispatch();

  const addClick = () => {
    dispatch(addText(text));
  };
  const removeClick = (el: string) => {
    dispatch(deleteText(el));
  };

  return (
    <>
      <div className="text grid gap-y-[20px] justify-center my-[100px]">
        <h3>Typing: {text}</h3>
        <div className="form flex">
          <input className="bg-white text-black border-solid border-2" type="text" onChange={(e) => setText(e.target.value)} />
          <button className="text-white" onClick={addClick}>
            Add text
          </button>
        </div>
        {textList?.map((el) => (
          <div key={el} className="content flex gap-x-[30px]">
            <h4>{el}</h4>
            <div onClick={() => removeClick(el)} className="close w-[20px] h-[20px] cursor-pointer">
              <Icony name="material-symbols:close" width="20" height="20" color="#64748b" />
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        <Confirmation setShow={setConfirm} />
      </div> */}
    </>
  );
};

export default SecondPage;
