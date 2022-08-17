import React from "react";
import "./style.css";
import { Image, TextHeader } from "../../../components";

export default function Card(props: any) {
  const {
    image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    label = "Juan",
    description = "",
  } = props;
  return (
    <div className="card">
      <Image src={image} alt="Pokemon" />
      <TextHeader label={label} type="h2" />
      <TextHeader label={description} type="h5" />
    </div>
  );
}
