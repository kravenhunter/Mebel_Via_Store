/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CatalogList, Categories, Filter, Icony } from "../../components";
import catalogData from "../../store/catalog.json";
import { ICard, IFilterSearch } from "../../types/ITypes";

const filreList = (search: IFilterSearch, catalog: ICard[]) => {
  search.proposes === "discont" && (catalog = catalog.filter((el) => el.discount > 0));

  search.weight && (catalog = catalog.filter((el) => el.weight >= search.weight));
  search.height && (catalog = catalog.filter((el) => el.height >= search.height));
  search.depth && (catalog = catalog.filter((el) => el.depth >= search.depth));
  search.weight && (catalog = catalog.filter((el) => el.weight >= search.weight));
  search.coverTypes.length > 0 && (catalog = catalog.filter((el) => search.coverTypes.some((c) => c === el.specification.clothBox)));
  search.carcasTypes.length > 0 && (catalog = catalog.filter((el) => search.carcasTypes.some((c) => c === el.specification.carcasMaterial)));
  search.fasadeColors.length > 0 && (catalog = catalog.filter((el) => search.fasadeColors.some((c) => c === el.colorFasad)));
  search.tableColors.length > 0 && (catalog = catalog.filter((el) => search.tableColors.some((c) => c === el.colorCarcas)));

  return catalog;
};

const initProposes = () => {
  return {
    proposes: "all",
    weight: 0,
    height: 0,
    depth: 0,
    coverTypes: [],
    carcasTypes: [],
    mecanizmTypes: [],
    fasadeColors: [],
    tableColors: [],
  };
};

const index = () => {
  const [catalogList, setCatalog] = useState<ICard[]>([]);

  const [proposes, setProposes] = useState<IFilterSearch>(initProposes);
  const reset = () => setProposes(initProposes);
  useEffect(() => {
    const cat = filreList(proposes, catalogData);
    console.log(cat);

    setCatalog(cat);
    console.log("changed");
    console.log(catalogList);
  }, [proposes]);

  return (
    <div className="catalog__container">
      <Categories />
      <div className="flex gap-x-20">
        <Filter setFilter={setProposes} filter={proposes} reset={reset} />
        <div className="catalog__list">
          <div className="category__path">
            <ul className="flex text-[16px] text-gray-400 items-center gap-x-3 ">
              <li>
                <Link to="/" replace className="text-gray-400 hover:text-gray-700">
                  Интернет-магазин
                </Link>
              </li>
              <li>
                <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
              </li>
              <li>
                <Link to="/catalog" replace className="text-gray-400 hover:text-gray-700">
                  Каталог мебели
                </Link>
              </li>
              <li>
                <Icony name="ooui:next-ltr" width="14" height="14" color="#a6a5a5" />
              </li>
              <li>Корпусная мебель</li>
            </ul>
          </div>
          <CatalogList carts={catalogList} title="Корпусная мебель" />
        </div>
      </div>
    </div>
  );
};

export default index;
