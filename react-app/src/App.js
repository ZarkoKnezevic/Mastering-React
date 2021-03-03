import React, { useState, useEffect } from "react";
// Import Components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  // State
  const [name, setName] = useState("Dev Ed");
  const message = "I went to sleep today!";
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  // Create Our Functions
    
  useEffect(() => {
    console.log('We run a function yayyyy!');
  }, [tweets]);
  return (
    <div className="box">
      <h1>TWITTER LIGHT</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
