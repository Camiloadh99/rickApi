import { axios as http } from "../frameworks_and_drivers/Axios";

import { BASE_URL } from "../config/settings.json";

export const sendAudio = async (audioFile: any, name: string) => {
  const opts = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE4LCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTUzMzIwNDB9.NTgSbu1Q1HX-tU4vI2MXvoEvZrbV7eRnN3ocbzGwx3I`,
      "Content-Type": "multipart/form-data",
    },
  };
  let bodyFormData = new FormData();
  bodyFormData.append("audiofile", audioFile);

  const URL = `http://localhost:8000/upload?name=${name}`;
  const response = await http.post(URL, bodyFormData, opts);
  return response;
};
