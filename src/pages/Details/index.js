import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MdPeople,
  MdLocationCity,
  MdFilterHdr,
  MdPublic,
  MdLocalPhone,
} from "react-icons/md";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import Leaf from "leaflet";

import api from "../../services/api";
import { formatNumber, getDistanceFromLatLonInKm } from "../../utils/functions";
import "./styles.css";

function Details() {
  const history = useHistory();
  const countrie = useSelector((state) => state.countrie);
  const [borderscountries, setBorderscountries] = useState([]);

  useLayoutEffect(() => {
    if (!countrie) {
      history.push("/");
    } else {
      const borders = countrie[0].borders.join(";");
      if (borders) {
        async function loadBordersCountries() {
          const response = await api.get(`/alpha?codes=${borders}`);
          setBorderscountries(response.data);
        }
        loadBordersCountries();
      }
    }
  }, [countrie, history]);

  const DefaultIcon = Leaf.icon({
    iconSize: [50, 50],
    iconUrl:
      "https://icons-for-free.com/iconfiles/png/512/marker-131994967950423839.png",
  });

  return (
    <div className="containerdetails">
      <div className="containerdetails__card">
        <article>
          <div>
            <MdLocationCity size={25} color="#454158" />
            <h1>{!countrie ? "" : countrie[0].capital}</h1>
          </div>
          <div>
            <MdFilterHdr size={25} color="#454158" />
            <h1>{!countrie ? "" : formatNumber(countrie[0].area)} km²</h1>
          </div>
          <div>
            <MdPeople size={25} color="#454158" />
            <h1>
              {!countrie ? "" : formatNumber(countrie[0].population)} pessoas
            </h1>
          </div>

          <div>
            <MdPublic size={25} color="#454158" />
            <h1>
              Dóminio padrão -{" "}
              {!countrie ? "" : `(${formatNumber(countrie[0].topLevelDomain)})`}
            </h1>
          </div>

          <div>
            <MdLocalPhone size={25} color="#454158" />
            <h1>
              Código de telefone -{" "}
              {!countrie ? "" : `(${formatNumber(countrie[0].callingCodes)})`}
            </h1>
          </div>
          <div className="containerdetails__map">
            <MapContainer
              id="mapid"
              center={!countrie ? [51.505, -0.09] : countrie[0].latlng}
              zoom={3}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={DefaultIcon}
                position={!countrie ? [51.505, -0.09] : countrie[0].latlng}
              >
                <Popup>{!countrie ? "" : countrie[0].name}</Popup>
              </Marker>
              {borderscountries.map((value) => {
                return (
                  <Marker
                    key={value.name}
                    position={!value ? [51.505, -0.09] : value.latlng}
                  >
                    <Polyline
                      key={value.name}
                      positions={[countrie[0].latlng, value.latlng]}
                      color={"#3498db"}
                    />

                    <Popup>
                      {!value ? "" : value.name} está em média há{" "}
                      {getDistanceFromLatLonInKm(
                        countrie[0].latlng,
                        value.latlng
                      ) / 1000}{" "}
                      km de distância do {countrie[0].name}{" "}
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Details;
