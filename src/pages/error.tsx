import { NavLink } from "react-router-dom";

const error = () => {
  return (
    <div
      className="
        grid
        gap-5
        place-content-center
        justify-items-center
        h-screen"
    >
      <h1>Opps. Error has ocurred!</h1>
      <NavLink
        className="
      border-solid 
      border-2 
       border-sky-500 
       w-40 p-2
       text-center
       text-lg
       text-white
        rounded-lg
       "
        to="/"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default error;
