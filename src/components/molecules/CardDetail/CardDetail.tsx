import React, { useEffect, useState } from "react";
import "./style.css";
import { Image, TextHeader } from "../../../components";
import { getOneCharacter } from "../../../api/services";
import { IGetOneRickMorty } from "../../../api/interfaz";

export default function CardDetail(props: any) {
  const { id } = props;
  const [character, setCharacter] = useState<IGetOneRickMorty>();

  useEffect(() => {
    getCharactersFunction(id);
  }, []);

  const getCharactersFunction = async (characterId: string) => {
    try {
      const response = getOneCharacter(characterId);
      const data = (await response).data;
      setCharacter(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-detail">
      <Image src={character?.image} alt="Pokemon" />
      <TextHeader label={`${character?.name}`} type="h2" />
      <TextHeader label={`${character?.species}`} type="h5" />
    </div>
  );
}
