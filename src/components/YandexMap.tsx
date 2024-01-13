import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

interface IProp {
  location: number[];
}
const YandexMap = ({ location }: IProp) => {
  // const [location, setLocation] = useState([55.755018, 37.798089]);
  console.log(location);

  return (
    <YMaps>
      <div className="maps max-w-[860px]">
        <Map
          state={{
            center: [...location],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
          width="47vw"
          height="25vw"
        >
          <Placemark geometry={[...location]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
