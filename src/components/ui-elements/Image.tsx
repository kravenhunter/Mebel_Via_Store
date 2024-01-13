interface IProps {
  link: string;
  name: string;
}
const Image = ({ link, name }: IProps) => {
  // <img src={prod.image} alt={prod.title} width={50}  style={{width:'50px',height: '50px' }}/>;
  return <img src={link} alt={name} />;
};

export default Image;
