import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [Meaning, setMeaning] = useState("");
  const emojiDictionary = {
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };
  var emojisWeKnow = Object.keys(emojiDictionary);
  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }
  function emojiInputHandler(event) {
    var Meaning = emojiDictionary[event.target.value];
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
