import React, { useState, useEffect } from "react";
import { Card, TextHeader } from "../../../components";
import { getCharacters } from "../../../api/services";
import { IGetRickMorty } from "../../../api/interfaz";
import { Link } from "react-router-dom";
export default function MainComponent(props: any) {
  const [characters, setCharacters] = useState<IGetRickMorty>();

  useEffect(() => {
    getCharactersFunction();
  }, []);

  const getCharactersFunction = async () => {
    try {
      const response = getCharacters();
      const data = (await response).data;
      setCharacters(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <TextHeader label="Personajes" type="h1" />
      </div>

      <div className="row">
        {characters?.results.map((item: any) => {
          return (
            <div className="col-12 col-md-2">
              <Link to={`/card/${item.id}`}>
                <Card
                  image={item?.image}
                  label={item?.name}
                  description={item?.species}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
