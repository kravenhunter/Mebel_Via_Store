import { Link } from "react-router-dom";

const Button = ({ isButton = true, path = "#", title = "Button", buttonCLass = "" }) => {
  return isButton ? (
    <button className={`${buttonCLass} hover:bg-orange-600 hover:text-white`}>{title}</button>
  ) : (
    <Link to={path} replace className={`${buttonCLass} hover:bg-orange-600 hover:text-white`}>
      {title}
    </Link>
  );
};

export default Button;
