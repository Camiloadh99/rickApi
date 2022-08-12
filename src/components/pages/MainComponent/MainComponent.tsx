import React, { useState } from "react";
import { sendAudio } from "src/api/pokeApi";
import ReactAudioPlayer from "react-audio-player";
export default function MainComponent() {
  const [audioFile, setAudioFile] = useState<any>("");
  const [audioFileName, setAudioFileName] = useState<string>("");
  const [audioLink, setAudioLink] = useState<any>("");
  const handleFile = (value: any) => {
    let file = value.target.files[0];
    setAudioFile(file);
    setAudioFileName(value.target.files[0].name);
  };
  const uploadFile = async (audio: any, name: string) => {
    try {
      const response = sendAudio(audio, name);
      const data = (await response).data;
      console.log(data);
      setAudioLink(data);
      console.log("Success");
      return data;
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <div>
      <input
        type="file"
        id="input"
        onChange={(value) => {
          handleFile(value);
        }}
      ></input>
      <button
        onClick={() => {
          uploadFile(audioFile, audioFileName);
        }}
      >
        Upload
      </button>
      <div>
        <ReactAudioPlayer src={audioLink} autoPlay controls />
      </div>
      <h3>
        Link Audio{" "}
        <a href={audioLink} target="_blank">
          {audioLink}
        </a>
      </h3>
    </div>
  );
}
