"use client";
import './detail.css'

import { useState } from "react";

export default function Detail(response) {
  const [text, setText] = useState(null);
  const [text1, setText1] = useState(null);
  const [gen, setgen] = useState(null);

  console.log("detail", response);
  if (!response) {
    return <div>No meme found.</div>;
  }

  const generateMeme = async () => {
    <br/>
    if (!response || !text || !text1) {
      console.error("Meme ID and text fields are required");
      return;
    }

    const username = "Arfa-Shoukat"; // Replace with your Imgflip username
    const password = "Arfa$123"; // Replace with your Imgflip password

    const url = `https://api.imgflip.com/caption_image?template_id=${response.response[0].id}&username=${username}&password=${password}&text0=${text}&text1=${text1}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to generate meme");
      }

      const data = await response.json();
      console.log("Generated meme:", data);
      setgen(data);
      // You can update state or perform any other actions based on the response data
    } catch (error) {
      console.error("Error generating meme:", error);
    }
  };

  return (
    <div>
        <br/><br/><br/><br/><br/>
      {!gen ? (
        <>
          {/* <h2>Detail</h2> */}

          <img className="img1" src={response.response[0].url} alt="Meme" />
          <br/><br/>
          <input
            placeholder="input1"
            onChange={(e) => setText(e.target.value)}
          /><br/><br/>
          <input
            placeholder="input2"
            onChange={(e) => setText1(e.target.value)}
          /> <br/><br/>
          <center>
          <button
           
            className="p-5"
            onClick={() => generateMeme()}
          >
            Generate
          </button></center>
        </> 
      ) : (
        <img src={gen.data.url} />
      )}
    </div>
  );
}