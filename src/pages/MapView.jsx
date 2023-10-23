import { MapContainer, TileLayer, Marker, Popup , Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import L from 'leaflet';
const MapView = ({ openModal }) => {
  const state = useSelector((store) => store);

  //* İcon kısmı
  const icon = L.icon({
    iconUrl:"/plane-icon.png",
    iconSize:[50],
    iconAnchor:[15,15],
  })

  return (
    <MapContainer
      center={[52.390806, 4.914336]}
      zoom={6.5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {state.flights.map((fly) => (
        <Marker icon={icon} key={fly.id} position={[fly.lat, fly.lng]}>
          <Popup>
            <div className="popup">
              <span>Code: {fly.code}</span>
              <button onClick={() => openModal(fly.id)}>Detail</button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={state.route}/>
    </MapContainer>
  );
};

export default MapView;
