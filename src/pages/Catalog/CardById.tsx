import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartDetails, CatalogList, Categories } from "../../components";
import catalog from "../../store/catalog.json";
import type { ICard } from "../../types/ITypes";

const CardById = () => {
  const [currentCard, setCerrentCard] = useState<ICard>();
  const [series, setSeries] = useState<ICard[]>([]);
  const [others, setOthers] = useState<ICard[]>([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const result = catalog.find((el) => el.id === Number(id));
    setCerrentCard(result);
    const getSeries = catalog.slice(0, 4);
    setSeries(getSeries);
    const getRandom = catalog.slice(0, 6);
    setOthers(getRandom);
  }, [id]);

  return !currentCard ? (
    <div>
      <h2>Not Found</h2>
    </div>
  ) : (
    <div className="details__container">
      <Categories />
      <CartDetails card={currentCard} />
      <div className="other_series mt-[74px] grid gap-y-[74px]">
        <CatalogList title="Другие спальные гарнитуры серии" carts={series} />
        <CatalogList title="Другие товары серии " carts={series} />
        <CatalogList title="Вас также может заинтересовать эти товары" carts={others} />
      </div>
    </div>
  );
};

export default CardById;
