import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [Meaning, setMeaning] = useState("");
  const emojiDictionary = {
    "đ¤Ŗ": " ROFL",
    "đ": "sad",
    "đĨ°": "In Love Face",
    "đĨ": "Hot",
    "đ": "annoyance",
    "âšī¸": "Frowning Face",
    "đ¤Š": "Exicted",
    "đ": "Hungry",
    "đĨē": " Begging",
    "đ": "Tongue Out"
  };
  var emojisWeKnow = Object.keys(emojiDictionary);
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  function emojiInputHandler(event) {
    var Meaning = emojiDictionary[event.target.value];
    if (Meaning === undefined) {
      Meaning = "We dont have this in our database";
    }
    setMeaning(Meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> Meaning {Meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
