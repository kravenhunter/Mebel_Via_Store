/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
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

export const index = memo(() => {
  const [catalogList, setCatalog] = useState<ICard[]>([]);

  const [proposes, setProposes] = useState<IFilterSearch>(initProposes);
  const reset = useCallback(() => setProposes(initProposes), []);
  const handleFilter = useCallback((event: ChangeEvent<HTMLInputElement>, type: string) => {
    type === "array" &&
      setProposes((prev) => {
        event.target.checked && (prev[event.target.name as keyof IFilterSearch] as string[]).push(event.target.value);

        if (!event.target.checked) {
          (prev[event.target.name as keyof IFilterSearch] as string[]) = (prev[event.target.name as keyof IFilterSearch] as string[]).filter((el) => el !== event.target.value);
        }

        return { ...prev };
      });

    type === "object" &&
      setProposes((prev) => {
        return { ...prev, [event.target.name as keyof IFilterSearch]: event.target.value };
      });
  }, []);

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
        <Filter setFilter={handleFilter} filter={proposes} reset={reset} />
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
});
