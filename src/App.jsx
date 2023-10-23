import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/mapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/flightActions";
import DetailModal from "./components/DetailModal";
const App = () => {
  const dispatch = useDispatch();
  const [showMapView, setShowMapView] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [detailId, setDetailId] = useState(null);

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  //* modal'ı açar
  const openModal = (id) => {
    //* Detayı gösterilecek uçağın id'sini state'de aktarma.
    setDetailId(id);
    //* Modalı gösterebilmek için showDetail durumunu true yapma.
    setShowDetail(true);
  };
  return (
    <>
      <Header />
      <div className="view-buttons">
        <button
          className={showMapView ? "active" : ""}
          onClick={() => setShowMapView(true)}
        >
          Map View
        </button>
        <button
          className={!showMapView ? "active" : ""}
          onClick={() => setShowMapView(false)}
        >
          List View
        </button>
      </div>
      {showMapView ? (
        <MapView openModal={openModal} />
      ) : (
        <ListView openModal={openModal} />
      )}

      {/* modal'i gösterme */}
      {showDetail && (
        <DetailModal
          detailId={detailId}
          closeModal={() => setShowDetail(false)}
        />
      )}
    </>
  );
};

export default App;
