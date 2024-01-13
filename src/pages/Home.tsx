import { Apportunities, CatalogList, Categories, GroupStuff, Offer, VideoBock } from "../components";
import catalog from "../store/catalog.json";

const Index = () => {
  return (
    <div className="main_container ">
      <Offer />
      <Categories />
      <VideoBock />
      <Apportunities />
      <CatalogList title="Товары со скидкой" carts={catalog} />
      <GroupStuff />
    </div>
  );
};

export default Index;
