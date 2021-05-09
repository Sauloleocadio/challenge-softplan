import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import api from "../../services/api";
import { addCountrie } from "../../redux/modules/countrie/actions";

import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadCountries() {
      const response = await api.get("/all");
      setCountries(response.data);
      setLoading(false);
    }

    loadCountries();
  }, []);

  function handleChangeInput(e) {
    setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  function handleDetailsCountries(countrie) {
    dispatch(addCountrie(countrie));

    history.push("/details");
  }

  return (
    <div className="containerhome">
      <div className="containerhome__card">
        {loading ? (
          <>
            <div className="containerhome__skeleton--input">
              <SkeletonTheme color="#dfe4ea" highlightColor="#eee">
                <Skeleton
                  count={1}
                  className="containerhome__skeleton"
                  height={50}
                />
              </SkeletonTheme>
            </div>
            <div className="containerhome__skeleton--card">
              <SkeletonTheme color="#dfe4ea" highlightColor="#eee">
                <Skeleton
                  count={6}
                  className="containerhome__skeleton"
                  height={100}
                />
              </SkeletonTheme>
            </div>
          </>
        ) : (
          <>
            <input
              value={search}
              onChange={(e) => handleChangeInput(e)}
              className="containerhome__input"
              type="text"
              placeholder="Digite o país que deseja pesquisar"
              autoCapitalize="sentences"
            />
            {countries
              .filter((countrie) => countrie.name.includes(search))
              .map((countrie) => {
                return (
                  <article
                    key={countrie.name}
                    onClick={() => handleDetailsCountries(countrie)}
                  >
                    <strong> {countrie.name} </strong>
                    <img
                      className="containerhome__imagecountrie"
                      src={countrie.flag}
                      alt="Logo"
                    />
                  </article>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
