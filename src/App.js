import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuotes, setrandomQuotes] = useState([]);

  async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data);
    let randIndex = Math.floor(Math.random() * data.length);
    setrandomQuotes(data[randIndex]);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App" id="quote-box">
      <h1>Random Quote Machine</h1>
      {quotes.map((quote) => (
        <>
          <p>{quote.text}</p>
          <p>{quote.author}</p>
        </>
      ))}
    </div>
  );
}

export default App;
