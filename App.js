import React, { useState } from "react";
import "./styles.css";

var emojidictionary = {
  "❤️": " Red Heart",
  "✨": " Sparkles",
  "🔥": " Fire",
  "😊": " Smiling Face with Smiling Eyes",
  "😂": " Face with Tears of Joy",
  "🥰": " Smiling Face with Hearts",
  " 🥲": " Smiling Face with Tear",
  " 😃": "Smileys & People",
  "🐻": "Animals & Nature",
  "⚽": "Activity"
};
var emojis = Object.keys(emojidictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiHandler(event) {
    // console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojidictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not available";
    }
    // console.log(meaning);
    setmeaning(meaning);
  }
  function emojionclickhandler(emoji) {
    //  console.log(emoji)
    var meaning = emojidictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="heading">Emoticon Interpreter</h1>
      <input
        placeholder="Enter emoji here or click on it"
        id="input-element"
        onChange={emojiHandler}
      ></input>
      <div id="output">{meaning}</div>
      <div class="emoji-print">
        {emojis.map(function (emoji) {
          return (
            <div
              onClick={() => emojionclickhandler(emoji)}

              // key={emoji}
            >
              {emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}
