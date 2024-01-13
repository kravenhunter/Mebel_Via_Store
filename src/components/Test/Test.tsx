import { useState } from "react";
// import { textSliceActions } from "../../store/textSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addText, removeText } from "../../store/textSlice";
// import { useDispatch, useSelector } from "react-redux";
import { Icony } from "../index";
// import { useAppSelector } from "../../hooks/useAppSelector";
//import { useActions } from "../../hooks";
const Test = () => {
  const [input, setInpent] = useState("");
  // const { removeText, addText } = useActions();
  // const dispatch = useDispatch();
  const testArr = useAppSelector((state) => state.testReducer);
  const dispatch = useAppDispatch();
  // const testArr = useSelector((store) => store.testReducer);
  // const { testReducer } = useAppSelector((store) => store);
  const addHandler = () => {
    dispatch(addText(input));
  };
  const removeHandler = (text: string) => {
    // dispatch(textSliceActions.removeText({ id: text }));
    dispatch(removeText(text));
  };

  return (
    <div className="text grid gap-y-[20px] justify-center my-[100px]">
      <h3>Typing: {input}</h3>
      <div className="form flex">
        <input className="bg-white text-black border-solid border-2" type="text" onChange={(ev) => setInpent(ev.target.value)} />
        <button className="text-white" onClick={addHandler}>
          Add
        </button>
      </div>
      {testArr?.map((el, index) => (
        <div key={index} className="content flex gap-x-[30px]">
          <h4>{el}</h4>
          <div onClick={() => removeHandler(el)} className="close w-[20px] h-[20px] cursor-pointer">
            <Icony name="material-symbols:close" width="20" height="20" color="#64748b" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
