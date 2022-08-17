import React from "react";
import "./style.css";

interface Iimage {
  src: string;
  alt?: string;
}

export default function Image(props: Iimage) {
  const { src, alt = "" } = props;
  return <img src={src} alt={alt} className="img-default"></img>;
}
